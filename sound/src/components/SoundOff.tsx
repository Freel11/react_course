import { FC } from "react";
import { NOTES } from "../enums/notes";

const SoundOff: FC = () => {
  const handleSoundOff = () => {
    const audioCtx = new window.AudioContext();

    // Define the chord (C Major: C, E, G)
    const frequencies = [NOTES.C, NOTES.E, NOTES.G];

    // Staggered start times (in milliseconds)
    const delays = [0, 1000, 2000]; // C starts first, then E after 300ms, then G after 600ms

    const oscillators: OscillatorNode[] = [];

    frequencies.forEach((freq, index) => {
      const oscillator = audioCtx.createOscillator();
      oscillator.type = "square";
      oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);

      oscillator.connect(audioCtx.destination);

      // Start each oscillator with a delay
      setTimeout(() => oscillator.start(), delays[index]);

      // Stop all after 2 seconds from their start
      setTimeout(() => oscillator.stop(), 4000);

      oscillators.push(oscillator);
    });
  };

  return (
    <div>
      <button onClick={handleSoundOff}>Sound Off</button>
    </div>
  );
};

export default SoundOff;
