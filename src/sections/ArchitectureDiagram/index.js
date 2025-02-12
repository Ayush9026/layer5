import React from "react";
import WhiteboardWrapper from "./whiteboard.style";
import { Container } from "../../reusecore/Layout";
import whiteboard_svg from "../../assets/images/whiteboard/whiteboard.png";
import Partners from "../Home/Partners-home";
import SeeYou from "../SeeYou";
import FeatureHero from "../FeatureHero";
import FeatureUseCard from "../../components/FeatureUseCard";
import collaborationGIF from "./images/collaboration.gif";
import optimizedGIF from "./images/optimized.gif";
import customizationGIF from "./images/customization.gif";
import shapesAndTemplatesGIF from "./images/shapes-and-templates.gif";
import RelatedPicks from "../../components/RelatedPicks";
import GCPDiagramDark from "../GCP-Diagram/images/gcp-diagram-dark.svg";
import GCPDiagramLight from "../GCP-Diagram/images/gcp-diagram-light.svg";
import AWSDiagramDark from "../Home/FeaturesContainer/images/aws.svg";
import AWSDiagramLight from "../Home/FeaturesContainer/images/aws-light.svg";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";
let data = {
  heading: "Design Architecture Diagram Online",
  sub_heading: "Effortlessly create software architectures, application architectures and system architectures in minutes.",
  image: whiteboard_svg
};

let card_data = [
  {
    heading: "Numerous Architecture Diagram Shapes & Templates",
    subtitle: "Designing visually striking and logical architecture diagram is much easier than you imagine. Simply drag and drop the pre-made shapes or templates that can fit your needs to the canvas, the architecture diagram in your mind will abruptly appear in front of you.",
    image: shapesAndTemplatesGIF
  },
  {
    heading: "Powerful Customizability",
    subtitle: "Customize fonts, sizes, alignments, and styles easily according to your needs. In a word, you can customize everything to create the most engaging architecture diagram.",
    image: customizationGIF
  },
  {
    heading: "Cloud collaboration",
    subtitle: "With cloud-based architecture diagram tool, you can efficiently collaborate with your team members at any time, anywhere.",
    image: collaborationGIF
  },
  {
    heading: "AWS, GCP and K8s optimized",
    subtitle: "Capture your key services with smart components for EC2, ELB, Lambda, RDS, DynamoDB, Kinesis, etc.",
    image: optimizedGIF
  },

];


const ArchitectureDiagram = () => {
  const { isDark } = useStyledDarkMode();
  const content = [
    {
      id: 1,
      title: "GCP architecture diagram",
      redirectLink: "/cloud-native-management/generate-gcp-architecture-diagram",
      imgSrc: isDark ? GCPDiagramDark : GCPDiagramLight,
    },
    {
      id: 2,
      title: "AWS architecture diagram",
      redirectLink: "/cloud-native-management/generate-aws-architecture-diagram",
      imgSrc: isDark ? AWSDiagramDark : AWSDiagramLight,
    }
  ];
  return (
    <WhiteboardWrapper>
      <FeatureHero data={data} />

      <div className={"question-container"}>
        <div className="wrapper">
          <h2 className={"use-heading"}>Why use an architecture diagramming software?</h2>
          <p>Following all the elements within your cloud environment can be challenging, but a visual diagram of your cloud architecture will help you stay up to date with its status, understand the relationship between components, identify and solve problems. This complexity adds up when multiple team members are working on the same project. A collaborative cloud diagramming sofware could help to pinpoint information and ensure that everybody is on the same page.</p>
        </div>
      </div>
      <Container>
        <div className={"feature-use-container"}>
          <div>
            <h2 className={"use-heading"}> Features that we provide</h2>
          </div>
          <div className={"collaboration_display"}>
            {card_data.map((x) => (
              <FeatureUseCard data={x} key={x.heading} sm={12} md={6} lg={6} />
            ))}
          </div>
        </div>
      </Container>

      <RelatedPicks content={content}/>
      <SeeYou />
      <Partners />
    </WhiteboardWrapper>
  );
};

export default ArchitectureDiagram;