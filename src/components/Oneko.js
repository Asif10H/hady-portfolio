import React, { useEffect } from "react";

const Oneko = () => {
  useEffect(() => {
    // --- আপনার দেওয়া oneko.js-এর কোডটি এখানে পেস্ট করা হয়েছে ---
    // (React-এর সাথে মানানসই করার জন্য সামান্য পরিবর্তন করা হয়েছে)

    const nekoEl = document.createElement("div");
    let nekoPosX = 32;
    let nekoPosY = 32;
    let mousePosX = 0;
    let mousePosY = 0;
    let frameCount = 0;
    let idleTime = 0;
    let idleAnimation = null;
    let idleAnimationFrame = 0;
    const nekoSpeed = 10;
    const spriteSets = {
      idle: [[-3, -3]],
      alert: [[-7, -3]],
      scratch: [
        [-5, 0],
        [-6, 0],
        [-7, 0],
      ],
      tired: [[-3, -2]],
      sleeping: [
        [-2, 0],
        [-2, -1],
      ],
      N: [
        [-1, -2],
        [-1, -3],
      ],
      NE: [
        [0, -2],
        [0, -3],
      ],
      E: [
        [-3, 0],
        [-3, -1],
      ],
      SE: [
        [-5, -1],
        [-5, -2],
      ],
      S: [
        [-6, -3],
        [-7, -2],
      ],
      SW: [
        [-5, -3],
        [-6, -1],
      ],
      W: [
        [-4, -2],
        [-4, -3],
      ],
      NW: [
        [-1, 0],
        [-1, -1],
      ],
    };

    function setSprite(name, frame) {
      const sprite = spriteSets[name][frame % spriteSets[name].length];
      nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${
        sprite[1] * 32
      }px`;
    }

    function resetIdleAnimation() {
      idleAnimation = null;
      idleAnimationFrame = 0;
    }

    function idle() {
      idleTime += 1;

      if (
        idleTime > 10 &&
        Math.floor(Math.random() * 200) === 0 &&
        idleAnimation == null
      ) {
        idleAnimation = ["sleeping", "scratch"][Math.floor(Math.random() * 2)];
      }

      switch (idleAnimation) {
        case "sleeping":
          if (idleAnimationFrame < 8) {
            setSprite("tired", 0);
            break;
          }
          setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
          if (idleAnimationFrame > 192) {
            resetIdleAnimation();
          }
          break;
        case "scratch":
          setSprite("scratch", idleAnimationFrame);
          if (idleAnimationFrame > 9) {
            resetIdleAnimation();
          }
          break;
        default:
          setSprite("idle", 0);
          return;
      }
      idleAnimationFrame += 1;
    }

    function frame() {
      frameCount += 1;
      const diffX = nekoPosX - mousePosX;
      const diffY = nekoPosY - mousePosY;
      const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

      if (distance < nekoSpeed || distance < 48) {
        idle();
        return;
      }

      idleAnimation = null;
      idleAnimationFrame = 0;

      if (idleTime > 1) {
        setSprite("alert", 0);
        idleTime = Math.min(idleTime, 7);
        idleTime -= 1;
        return;
      }

      let direction = diffY / distance > 0.5 ? "N" : "";
      direction += diffY / distance < -0.5 ? "S" : "";
      direction += diffX / distance > 0.5 ? "W" : "";
      direction += diffX / distance < -0.5 ? "E" : "";
      setSprite(direction, frameCount);

      nekoPosX -= (diffX / distance) * nekoSpeed;
      nekoPosY -= (diffY / distance) * nekoSpeed;

      nekoEl.style.left = `${nekoPosX - 16}px`;
      nekoEl.style.top = `${nekoPosY - 16}px`;
    }

    function create() {
      nekoEl.id = "oneko";
      nekoEl.style.width = "32px";
      nekoEl.style.height = "32px";
      nekoEl.style.position = "fixed";
      // নিশ্চিত করুন oneko.gif ফাইলটি 'public' ফোল্ডারে আছে
      nekoEl.style.backgroundImage = "url('/oneko.gif')";
      nekoEl.style.imageRendering = "pixelated";
      nekoEl.style.left = "16px";
      nekoEl.style.top = "16px";
      // বিড়ালটি যেন অন্য কিছুর ওপর ক্লিক করতে বাধা না দেয়
      nekoEl.style.pointerEvents = "none";
      // বিড়ালটিকে সবার উপরে রাখতে
      nekoEl.style.zIndex = "9999";

        
    //   nekoEl.style.filter = "invert(100%)";
      document.body.appendChild(nekoEl);

      // মাউস ইভেন্ট লিসেনার
      const handleMouseMove = (event) => {
        mousePosX = event.clientX;
        mousePosY = event.clientY;
      };
      document.addEventListener("mousemove", handleMouseMove);

      // অ্যানিমেশন লুপ
      const interval = setInterval(frame, 100);

      // এই ফাংশনটি কম্পোনেন্ট আনমাউন্ট হলে চলবে (Cleanup)
      return () => {
        clearInterval(interval);
        document.removeEventListener("mousemove", handleMouseMove);
        document.body.removeChild(nekoEl);
      };
    }

    // `create` ফাংশনটি কল করুন এবং cleanup ফাংশনটি `useEffect`-কে রিটার্ন করুন
    const cleanup = create();
    return cleanup;
  }, []); // [] মানে এই ইফেক্টটি শুধু একবার (mount) চলবে

  // এই কম্পোনেন্টটি নিজে কিছু রেন্ডার করে না, শুধু ইফেক্টটি চালু করে
  return null;
};

export default Oneko;
