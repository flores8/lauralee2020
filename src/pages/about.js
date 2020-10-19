import React from "react"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/about.css"
import { Link } from "gatsby"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="about">
      <div className="wide-wrapper text" style={{ textAlign: "center" }}>
        <h6>HI I’M LAURALEE</h6>
        <h1>
          Product designer. Front-end developer. Usability professional. Entrepreneur.
        </h1>
      </div>
      <div
        style={{
          maxWidth: `715px`,
          marginBottom: `1.45rem`,
          marginRight: `auto`,
          marginLeft: `auto`,
        }}
      >
        <Image />
      </div>
      <div className="skinny-wrapper text">
        <p>I have been designing and creating software for the past decade. I absolutely love it. I'm pretty excited about my new project <Link to="https://www.cssacademy.com/">CSS Academy</Link>.</p>
        <h3>Where you can find me around the internet</h3>
        <ul>
          <li>Here of course. With each <Link to="/blog">blog post</Link> I try to design an image to go along with it. Even if you don't read the post, take a look at the image. <Link to="/blog/quality-vs-quantity">This one was super fun</Link>. <Link to="/blog/embrace-the-difficult">So was this one</Link>.</li>
          <li><Link to="https://www.cssacademy.com/">CSS Academy</Link> - I'm throwing myself into building a place for designers and developers who want to learn or improve their CSS skills.</li>
          <li><Link to="http://lauralee.design/">Dribbble</Link> - I have some of my design work up there. If you're on dribbble I'd love to connect with you there.</li>
        </ul>
        <h3>Books that have changed me and the way I work</h3>
        <p>I'm currently reading <Link to="https://www.christenseninstitute.org/books/competing-against-luck/">Competing Against Luck</Link>.</p>
        <ul>
          <li><Link to="https://www.calnewport.com/books/deep-work/">Deep Work</Link> - this is a book about performing your best work intentionally. It changed the way I schedule and do my work. If you are not already working deeply, I truly believe that you would benefit from following the advice in this book.</li>
          <li><Link to="https://www.amazon.com/Mans-Search-Meaning-Viktor-Frankl-ebook/dp/B009U9S6FI">Man's Search for Meaning</Link> - probably the most beautiful book I have ever read. It changed the way I view my freedom and my attitude. It is inspiring and incredibly insightful.</li>
          <li><Link to="https://jamesclear.com/book-summaries/the-compound-effect">The Compound Effect</Link> - this is a book about the fundamentals of success. It is the solid foundation for anyone who wants to achieve their goals. It's a book about consistency.</li>
          <li><Link to="https://www.elizabethgilbert.com/books/big-magic/">Big Magic</Link> - a book on creativity. That might sound boring but I promise you this book is anything but boring. If you are a creator or want to be this book is worth your time. I especially love to <Link to="https://www.audible.com/pd/Big-Magic-Audiobook/B00U0CAEB8?qid=1603126146&sr=1-1&ref=a_search_c3_lProduct_1_1&pf_rd_p=e81b7c27-6880-467a-b5a7-13cef5d729fe&pf_rd_r=DPD2CFXPGEVB6G6JP5R1">listening to Elizabeth Gilbert narrate it</Link>. Sometimes I hope the book will never end.</li>
          <li><Link to="https://basecamp.com/books/calm">It Doesn't Have to Be Crazy at Work</Link> - this book showed me what work could actually be like. I was so used to it being one way I never considered it could be different. This book opened my eyes not only to work but to myself.</li>
          <li><Link to="https://austinkleon.com/steal/">Steal Like an Artist</Link> - when I first started designing I needed this book. It's another book about creativity. It's short and so good.</li>
        </ul>

        <h3>A few of my favorite quotes</h3>

        <p>I really love quotes so it's hard to narrow it down but here are a few that impact me each time I read them.</p>
      </div>
      <div className="wide-wrapper text">
        <p className="quote">
          “The master has failed more times than the beginner has even tried.”
        </p>
        <p className="reference">Stephen McCranie</p>
        <p className="quote">
          “A year from now, you’ll wish you had started today.”
        </p>
        <p className="reference">Karen Lamb</p>
        <p className="quote">
          “Before you ask for readers, write the article you wish you could read. Before you ask for the sale, create the product you wish you had. Before you need support, be the supportive friend. Before you need love, be the loving partner. Always give value before you ask for value.”
        </p>
        <p className="reference">James Clear</p>
        <p className="quote">
          “We who lived in the concentration camps can remember the men who walked through the huts comforting others, giving away their last piece of bread. They may have been few in number, but they offer sufficient proof that everything can be taken from a man but one thing: the last of the human freedoms--to choose one's attitude in any given set of circumstances, to choose one's own way.”
        </p>
        <p className="reference">Viktor E. Frankl</p>
      </div>
    </div>
  </Layout>
)

export default About
