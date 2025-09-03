const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-200 to-slate-300 pt-20">
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">My Story</h1>
          
          <div className="mb-8">
            <picture>
              <source
                type="image/webp"
                srcSet="/assets/img/webp/jaidevimg.jpg"
              />
              <img
                src="/assets/img/jpg/jaidevimg.jpg"
                alt="Professional Me"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto object-cover shadow-lg"
              />
            </picture>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mt-6">Jaidev Yadav</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Ever since I was a kid, creating new things always got me excited.
              However, at that time I didn't have enough resources to pursue the
              same. That passion drove me to pursue engineering, where I was exposed
              to a plethora of resources and knowledge. I was fascinated by the
              evolving technology, which was developing new and innovative ideas
              every now and then. In the beginning, it was difficult to get used to
              coding, however, during the lock down I started reading about new
              technology, which gave me a massive boost to learn more about the
              industry and pursue a career. With the same fascination that drove me
              as kid, I am learning MERN stack at Masai School. It is here that I
              learned that the field of coding is ever-growing. I am proficient in
              the following technical skills: HTML, CSS, JavaScript, MongoDB, React.
              Outside of coding, I am a traveler and enjoy playing table tennis and
              badminton.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;