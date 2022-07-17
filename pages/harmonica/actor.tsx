import React, {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Image, { StaticImageData } from "next/image";

type ActorProps = {
  initialPosition: number;
  targetX: number;
  className: string;
  avatar: StaticImageData;
  width: number;
  keepInView: boolean;
  movementSpeed: number;
  initiallyFacingLeft: boolean;
};

export default function Actor({
  initialPosition,
  targetX,
  className,
  avatar,
  width,
  movementSpeed,
  keepInView,
  initiallyFacingLeft,
}: ActorProps) {
  const actorRef: MutableRefObject<HTMLDivElement> = useRef();
  const [actorPosition, setActorPosition] = useState(initialPosition);
  const [actorTarget, setActorTarget] = useState(undefined);
  const [movementInterval, setMovementInterval] = useState(undefined);
  const [movingLeft, setMovingLeft] = useState(initiallyFacingLeft);

  const clearMovementInterval = useCallback(() => {
    if (movementInterval) {
      clearInterval(movementInterval);
      setMovementInterval(undefined);
    }
  }, [movementInterval]);

  const changeActorDirection = useCallback(
    (direction) => {
      if (direction === -1 && !movingLeft) {
        setMovingLeft(true);
      }

      if (direction === 1 && movingLeft) {
        setMovingLeft(false);
      }
    },
    [movingLeft]
  );

  useEffect(
    function () {
      if (targetX !== actorTarget) {
        console.log("User requested new actor target", {
          targetX,
          actorTarget,
        });
        clearMovementInterval();
        setActorTarget(targetX);
      }
    },
    [targetX, actorTarget, clearMovementInterval]
  );

  useEffect(
    function () {
      if (actorTarget && !movementInterval && actorPosition !== actorTarget) {
        console.log("Received update, setting new interval", {
          actorTarget,
          movementInterval,
          actorPosition,
        });

        clearMovementInterval();

        setMovementInterval(
          setInterval(function () {
            setActorPosition((currentPosition) => {
              if (Math.abs(currentPosition - actorTarget) < movementSpeed) {
                return actorTarget;
              }

              const direction = actorTarget > currentPosition ? 1 : -1;
              changeActorDirection(direction);
              return currentPosition + movementSpeed * direction;
            });
          }, 1)
        );
      }
    },
    [
      actorTarget,
      movementInterval,
      actorPosition,
      movementSpeed,
      clearMovementInterval,
      changeActorDirection,
    ]
  );

  useEffect(
    function () {
      if (movementInterval && actorPosition === actorTarget) {
        console.log("Clearing interval");
        clearMovementInterval();
      }
    },
    [actorPosition, movementInterval, actorTarget, clearMovementInterval]
  );

  useEffect(
    function () {
      if (keepInView && actorRef && actorRef.current) {
        actorRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }
    },
    [actorPosition, keepInView]
  );

  return (
    <div
      className={className}
      style={{
        left: actorPosition,
        width: width,
      }}
      ref={actorRef}
    >
      <Image
        src={avatar}
        alt="Józia"
        objectFit="fill"
        style={{
          transform: movingLeft && "scaleX(-1)",
        }}
      />
    </div>
  );
}