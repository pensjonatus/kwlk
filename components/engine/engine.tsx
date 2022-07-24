import { useState, useEffect } from "react";
import styles from "./engine.module.css";
import { useEvent } from "../../hooks";

const BLOCKS = [140, 250, 390];

// this is in comparison to the rest of the game
// 2 is twice the speed
// 1 is the same speed
const JUMP_VELOCITY = 1.4;

function CreateEngine(setState) {
  this.settings = {
    tile: 10, // width of one tile
  };

  // current stage position
  this.stage = 0;
  this.jump = false;
  this.direction = "up";
  this.position = 0;
  this.max = this.settings.tile * 40;
  this.blocks = BLOCKS.map((b) => b * this.settings.tile);

  const doJump = () => {
    // if not jumping, reset and return
    if (!this.jump) {
      this.position = 0;
      this.direction = "up";
      return;
    }

    // if finished jumping, reset and return
    if (this.direction === "down" && this.position <= 0) {
      this.jump = false;
      this.position = 0;
      this.direction = "up";
      return;
    }

    // if the jump is at its max, start falling
    if (this.position >= this.max) this.direction = "down";

    // depending on the direction increment the jump.
    if (this.direction === "up") {
      this.position += this.settings.tile * JUMP_VELOCITY;
    } else {
      this.position -= this.settings.tile * JUMP_VELOCITY;
    }
  };

  // function that will be continuously ran
  this.repaint = () => {
    // move the stage by one tile
    this.stage += this.settings.tile;

    // check and perform jump
    doJump();

    // set state for use in the component
    setState({
      stage: this.stage,
      jump: this.position,
      blocks: this.blocks,
    });

    // start repaint on next frame
    return requestAnimationFrame(this.repaint);
  };

  // trigger initial paint
  this.repaint();
  return () => ({
    jump: () => {
      // if jump is not active, trigger jump
      if (!this.jump) {
        this.jump = true;
      }
    },
  });
}

export default function Engine() {
  // game state
  const [gameState, setGameState] = useState({
    stage: 0,
    jump: 0,
    blocks: [],
  });

  // trigger game to start
  const [start, setStart] = useState(false);

  // if game is running
  const [started, setStarted] = useState(false);

  // instance of game engine
  const [engine, setEngine] = useState(null);

  const handleKeyPress = (e) => {
    // the ' ' char actually represents the space bar key.
    if (e.key === " ") {
      // start the game when the user first presses the spacebar
      if (!started && !start) {
        setStart(true);
      }

      // if the game has not been initialized return
      if (engine === null) return;

      // otherwise jump
      engine.jump();
    }
  };

  useEvent("keyup", handleKeyPress);

  useEffect(() => {
    if (start) {
      setStarted(true);
      setStart(false);
      // create a new engine and save it to the state to use
      setEngine(
        new CreateEngine(
          // set state
          (state) => setGameState(state)
        )
      );
    }
  }, [start]);

  return (
    <div className={styles.container}>
      <div
        className={styles.stage}
        style={{
          transform: `translate(-${gameState.stage}px, 0px)`, // move stage
        }}
      >
        <span
          className={styles.character}
          style={{
            transform: `translate(${gameState.stage}px, -${gameState.jump}px)`, // move char in opposite direction
          }}
        />
        {gameState.blocks.map((block) => (
          <span
            className={styles.block}
            key={block}
            style={{
              transform: `translate(${block}px, 0px)`, // move stage
            }}
          />
        ))}
      </div>
    </div>
  );
}
