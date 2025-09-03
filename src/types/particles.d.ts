declare module 'particles.js' {
  interface ParticlesConfig {
    particles?: any;
    interactivity?: any;
    retina_detect?: boolean;
  }

  function particlesJS(elementId: string, config: ParticlesConfig): void;
  export { particlesJS };
  export default particlesJS;
}