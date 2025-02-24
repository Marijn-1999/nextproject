import Image from "next/image";

export default function Showcase() {
  return (
    <div>
      <main>
        <section className="showcase">
          <h1>Showcase</h1>
          <p>Explore projects built using Next.js</p>
          <div className="grid">
            <div className="card">
              <Image
                src="/nextjs.png"
                alt="Project 1"
                width={300}
                height={200}
              />
              <h3>Project One</h3>
              <p>A modern e-commerce site with optimized performance.</p>
            </div>
            <div className="card">
              <Image
                src="/nextjs.png"
                alt="Project 2"
                width={300}
                height={200}
              />
              <h3>Project Two</h3>
              <p>A blog platform with dynamic content and SEO optimization.</p>
            </div>
            <div className="card">
              <Image
                src="/nextjs.png"
                alt="Project 3"
                width={300}
                height={200}
              />
              <h3>Project Three</h3>
              <p>A portfolio website showcasing interactive animations.</p>
            </div>
            <div className="card">
              <Image
                src="/nextjs.png"
                alt="Project 4"
                width={300}
                height={200}
              />
              <h3>Project One</h3>
              <p>A modern e-commerce site with optimized performance.</p>
            </div>
            <div className="card">
              <Image
                src="/nextjs.png"
                alt="Project 5"
                width={300}
                height={200}
              />
              <h3>Project Two</h3>
              <p>A blog platform with dynamic content and SEO optimization.</p>
            </div>
            <div className="card">
              <Image
                src="/nextjs.png"
                alt="Project 6"
                width={300}
                height={200}
              />
              <h3>Project Three</h3>
              <p>A portfolio website showcasing interactive animations.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
