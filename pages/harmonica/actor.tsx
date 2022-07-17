import React, {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./harmonica.module.css";
import clsx from "clsx";

type ActorProps = {
  initialPosition: number;
  targetX: number;
  className: string;
  avatar: StaticImageData;
  width: number;
  height: number;
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
  height,
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
        clearMovementInterval();
        setActorTarget(targetX);
      }
    },
    [targetX, actorTarget, clearMovementInterval]
  );

  useEffect(
    function () {
      if (actorTarget && !movementInterval && actorPosition !== actorTarget) {
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
      className={clsx(className, styles.actor)}
      style={{
        left: actorPosition,
        width: width,
        height: height,
        transform: movingLeft && "scaleX(-1)",
      }}
      ref={actorRef}
    >
      <Image src={avatar} alt="Józia" layout="fill" />
    </div>
  );
}
