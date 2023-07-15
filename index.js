import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
	.prompt([{ message: "Enter the URL: ", name: "url" }])
	.then((answers) => {
		var qr_svg = qr.image(answers.url, { type: "svg" });
		qr_svg.pipe(fs.createWriteStream("qr.svg"));
	});
