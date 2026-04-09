export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.6} color="#FFFEF7" />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.2}
        color="#F5C242"
      />
      <pointLight position={[-3, 2, 4]} intensity={0.8} color="#F5944A" />
      <pointLight position={[3, -2, 2]} intensity={0.4} color="#7BA05B" />
    </>
  );
}
