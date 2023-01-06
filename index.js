import { animated } from "@react-spring/web";
import { useSpring, animated } from "@react-spring/web";

export default function MyComponent() {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));

  return (
    <animated.div
      style={{
        width: 80,
        height: 80,
        background: "#ff6d6d",
        borderRadius: 8,
        ...springs,
      }}
    />
  );
}
