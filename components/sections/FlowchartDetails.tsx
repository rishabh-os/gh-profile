import flowchart from "../../assets/flowchart_l.png";
import Image from "next/image";
const FlowchartDetails = () => {
	return (
		<div className="p-2 md:p-8 xl:leading-relaxed">
			This project is a web application that is similar to other project
			management tools. The aim was to make use of the flowchart canvas to
			enhance the experience and enable easy visualization of non-linear flows,
			with a focus on clean, beautiful UI/UX. The UI follows a <b>WYSIWYG</b>{" "}
			(What You See Is What You Get) approach.
			<br />
			This includes a fully interactive and editable flowchart that lets the
			user customize the color and labels of the nodes and edges. There is also
			functionality for adding links to other nodes.
			<div className="p-2 md:p-4">
				<Image className=" w-max rounded-xl" src={flowchart} alt="Flowchart" />
			</div>
			A file management system is also present in the sidebar, which lets the
			user manage multiple flowcharts and their directory structure in a drag
			and drop manner.
			<br /> There was also significant work done on a backend to manage the
			data in this project. It was made using <b>Neo4j</b> with a strict{" "}
			<b>GraphQL</b> schema.
		</div>
	);
};

export default FlowchartDetails;
