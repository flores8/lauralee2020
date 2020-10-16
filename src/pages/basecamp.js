import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby";
import Family from "../components/Images/Family"
import Hiking from "../components/Images/Hiking"
import { blue } from "../utils"
import { Link } from "gatsby"

const Basecamp = () => {
  const data = useStaticQuery(basecampImages);
  return (
    <Layout>
      <SEO title="Basecamp Cover Letter" />
      <div className="wide-wrapper text">
        <Title>Hi, I'm Lauralee</Title>
        <Subtitle>
          Product designer. Front-end developer. Usability professional.
          Entrepreneur.
        </Subtitle>
        <Half>
          <Left>
            <SectionTitle>
              About me
            </SectionTitle>
            <Content>I am a laid back and happy person. I love my life and my family.  I am married to a man who I am crazy about. We've been married for 15 years and each year is somehow better than the last. We have two children (10 and 12 years old) who make me proud and hopeful for the future. And to top it all off I get to do work I genuinely enjoy.</Content>
            <Family />
          </Left>
          <Right>
            <Hiking />
            <Content>
              I like to read, hike, mountain bike, swim, and pretty much enjoy all sports. I love earrings. I sometimes decide my clothes based on what earrings I want to wear that day. I love going to the movies. I've missed having theaters open this year. I love traveling and experiencing new places, food, and cultures. I love to learn. I'm always taking courses, reading, experimenting and trying to improve myself. 
            </Content>
          </Right>
        </Half>

        <ContentHeavy>
          <SectionTitle>
            What I can bring to Basecamp
          </SectionTitle>
          <Columns>
            <Content>
              Right now you need someone who can not only design beautiful and usable interfaces but can also create those designs in HTML, CSS (using BEM), and Javascript right inside your Rails app. A person who knows that a design done with Lorem Ipsum has missed the whole point. 
            </Content>
            <Content>
              You need someone who doesn't need a lot of direction or daily check-ins. Someone who can take a shaped project and run with it. They set their own direction and they execute on it. Someone with an entrepreneurial spirit who has the desire and experience to start projects and see them through. 
            </Content>
            <Content>
              You know that their work isn't the only thing that is important. They're part of a team after all. You need someone who can clearly communicate and work well with other team members. And they should be the type of person who jumps in to help when they notice someone could use a hand. 
            </Content>
            <Content>
              I am that person. It's not that I can be that person for this job. Or try to become that person because I know that's what you're looking for. That is simply who I am. 
            </Content>
          </Columns>
        </ContentHeavy>
        <ContentHeavy>
          <SectionTitle>
            Basecamp's role in my future
          </SectionTitle>
          <Columns>
            <Content>
              I am well aware of how many people want this opportunity and may, like me, be a good fit. So, if I am lucky enough to be one of the few who gets to progress to the next stage in the interview process or the one who gets to join the team I would be deeply humbled and equally as excited. 
            </Content>
            <Content>
              I would look forward to the incredible people I would get to work with. For the chance to make them friends and mentors, people I trust and admire. To work together making remarkable software.  
            </Content>
            <Content>
              I would also find a deep satisfaction in making my own impact on Basecamp, on both people and projects. I would seek out opportunities to serve wherever I could, whether that be a simple helping hand or a teaching/mentoring opportunity. And each six week cycle I would enjoy a new start, a new project, and a new opportunity to do my best work. 
            </Content>
            <Content>
              Getting to do work at a company I'm proud of, whose values match my own, doing work I enjoy, with people I admire would be a dream come true for me. I sincerely hope you'll consider me. 
            </Content>
          </Columns>
        </ContentHeavy>

        <ContentHeavy>
          <SectionTitle>
            What I've done
          </SectionTitle>
          <Content>
            The things I've done could be broken up into three areas:  
          </Content>

          <SectionSubTitle>
            1. Usability Professional
          </SectionSubTitle>
          <Columns>
            <Content>
              When I went to school I thought usability would my career path. I got a graduate degree in Human-Computer Interaction. I worked in usability and eventually ran a usability team. It was fascinating to uncover unknown usability issues and I loved figuring out how to solve them. In particular, I loved knowing that what I did made the websites and web applications easier for people to understand and use. 
            </Content>
          </Columns>

          <SectionSubTitle>
            2. Side Projects / Entrepreneurial Ventures
          </SectionSubTitle>
          <Columns>
            <Content>
              My first side project was <Link to="http://majorfinder.com/">Major Finder</Link>, where I designed and developed my very first app (in Rails). It was incredibly exciting. I discovered how much I loved it and so I took a coding bootcamp to improve my programming skills in Ruby and Ruby on Rails. As part of this bootcamp I created around 10 apps. This was a great exercise learning and sharpening my development and design skills. It was probably the first time I simply experimented with different designs and product layouts. And I learned to create everything from a basic Rails CRUD app to an API.  It was exhilarating. 
            </Content>
            <Content>
              After the bootcamp I started doing some freelance work where I got to do a mixture of designing and developing websites and a few web apps. I absolutely loved it and knew this was my future. During this time my brother unexpectedly passed away and a short time later I took a weekend and created a way to <Link to="http://rememberbrig.com/">gather his memories</Link>. Later I created a way for others to gather memories of <Link to="https://memorates.com/">their lost loved ones</Link>. I've recently just started a new project called <Link to="https://www.cssacademy.com/">CSS Academy</Link>. 
            </Content>
          </Columns>

          <SectionSubTitle>
            3. Product Designer
          </SectionSubTitle>
          <Columns>
            <Content>
              I kind of stumbled into becoming a product designer only to find it fit me perfectly. I was approached by a company for a position as their product designer. They had seen some of my work and liked what they saw. I learned a lot in this position. A couple quick things: 
              <ol>
                <li><strong>I love to <em>create</em> my designs.</strong> This position didn't allow me to create them, only design. This taught me what to look for in future jobs. </li>
                <li><strong>Product design fits me perfectly.</strong> In all my work up to this point I got to be both designer and developer and I loved it. This job was only design. No development. Seeing the two separate roles helped me realized that I care a lot about the design. If I had to choose I would choose design. This was a big eye opener for me and shaped a lot of my choices moving forward. </li>
                <li><strong>Being on a team is amazing.</strong> Previously, all my other work had been done as a freelancer or working on my own projects. It was the first time I understood the power of working together to make something great.  </li>
              </ol>
            </Content>
            <Content>I was in my next position for four years. It was a company that was intentionally small and had a lot of the same values as Basecamp. I loved it. We had very few meetings, everyone was remote, we focused on designing and building the best product we could imagine, while keeping things simple, ensuring it was easy to use, and we took pride in taking care of our customers. </Content>
            <Content>Here are a few responses I received from customers I helped:</Content>
          </Columns>
          <Quotes>
            <Content>
              <blockquote>
                Thank you so much! Seriously I've never seen anyone send over a video and provide help like this! I showed this to my entire team on how customer service in a digital age should be.
              </blockquote>
            </Content>
            <Content>
              <blockquote>
                I wanted to let you know I've finished testing the program top to bottom and everything is working as desired. Thank you again for all of the help. When these issues started to arise, I sent the initial support email and started to look at other tools as backup options. It was your timely and effective support that made it clear Kickofflabs was the right choice for us. You've got a loyal customer now for sure.
              </blockquote>
            </Content>
            <Content>
              <blockquote>
                Lauralee, firstly let me say a HUGE thank you!
                if i did not love Kickoff labs enough before, now i cant say how amazing it is! That is possibly the best customer support i have ever seen.
                Your boss runs one smart company.
                Thank you
                Mark
              </blockquote>
            </Content>
          </Quotes>
          <Columns>
            <Content>
              I also got to design and create all my designs - everything from the app dashboard to creating a new onboarding sequence. Every new project I got to be involved in from design to development. I loved it.
            </Content>
            <Content>
              Here's a small sampling of my product design work:
            </Content>
          </Columns>
        </ContentHeavy>
        <ImageGrid>
          {data.allFile.nodes.map(({childImageSharp}) =>(
            <Img fluid={childImageSharp.fluid} />
          ))}
        </ImageGrid>
      </div>

      <div className="skinny-wrapper text">
        <ContentHeavy>
          <SectionTitle>
            What excites me
          </SectionTitle>
          <Content>
            <ol>
              <li>
                I'm excited by the idea of working at Basecamp. If I had to nail down the thing that excites me the most about this opportunity I think it would be the team I would get to work with. Getting to learn from, collaborate with, and contribute to such a hugely talented group of people would not only be exciting but also rewarding. And, of course, as a customer and user (lauralee@hey.com) I would love to see my work in a product I use every day. 
              </li>
              <li>
                <Link to="https://www.cssacademy.com/">CSS Academy</Link> is a project I have recently just begun and am really excited about. It's meant for designers and developers who want to learn or improve their CSS skills and stay on top of new changes in the CSS world. I believe I will work on this project for the rest of my career. I'm really enjoying it and have a lot of plans for it. 
              </li>
              <li>
                We have a few trips planned for when travel is safe that I'm excited about. We're planning on going to Japan and Belgium. We love to travel. 
              </li>
              <li>
                I'm excitedly waiting on our <Link to="https://www.yellowleafhammocks.com/products/the-hammock-throne" >Hammock Throne</Link> to arrive. We have one of the Yellow Leaf hammocks in our back yard and it is so comfortable! The base we have it hanging from simply doesn't compare to the beautiful Hammock Throne. 
              </li>
              <li>
                I've been thinking about getting into wood working. When I consider the things I could create I get excited. I have a lot of ideas and projects in mind. The idea of learning something completely new and different also energizes me.
              </li>
            </ol>
          </Content>
        </ContentHeavy>
      </div>
      
    </Layout>
  )
}

const Title = styled.h2`
  line-height: 1.3;
  margin-block-start: 2rem;
  margin-block-end: .75rem;
  font-weight: bold;
  font-size: clamp(2.36rem, 1rem + 3.5vw, 3.15rem);
`
const Subtitle = styled.h3`
  font-size: clamp(1.33rem, 1rem + 1.3vw, 1.77rem);
  font-weight: 400;
  line-height: 1.3;
`
const SectionTitle = styled.h4`
  font-size: clamp(1.33rem, 1rem + 1.3vw, 1.77rem);
  font-weight: bold;
`
const SectionSubTitle = styled.h5`
  font-size: clamp(1rem, 1rem + .6vw, 1.33rem);
`
const Half = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  margin-block-start: 4rem;
`
const Left = styled.div`
  .gatsby-image-wrapper {
    margin-block-end: 1.5rem;
  }
`
const Right = styled.div`
  .gatsby-image-wrapper {
    margin-block-end: 1.5rem;
  }
`
const Content = styled.p`
  line-height: 1.7;
  blockquote {
    background: ${blue.white};
    padding: 2rem;
    border-radius: 3px;
    border-left: 5px solid ${blue[200]}
  }
  a {
    display: inline-block;
    color: hsla(228, 2%, 40%, 1);
    text-decoration: none;
    background: linear-gradient(
      to bottom,
      hsla(357, 85%, 64%, 0.3),
      hsla(357, 85%, 64%, 0.3)
    );
    background-position: 0% 100%;
    background-repeat: repeat-x;
    background-size: 3px 3px;
    transition: background-size 0.3s;
    &:hover {
      color: hsla(228, 2%, 40%, 1);
      background-size: 4px 50px;
    }
  }
`
const ContentHeavy = styled.div`
  margin-block-start: 4rem;
`
const Columns = styled.div`
  column-width: 200px;
  column-count: 2;
  column-gap: 75px;
  margin-bottom: 5rem;
`
const ImageGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`
const Quotes = styled.div`
margin-block-start: -6rem;
margin-block-end: 3rem;
`

const basecampImages = graphql`
  {
    allFile(filter: {relativeDirectory: {eq: "basecamp"}}) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

export default Basecamp
