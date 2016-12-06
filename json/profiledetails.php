<?php

header('Access-Control-Allow-Origin: *'); 

$json = [
	"id" => 2,
	"firstname" => "Damien",
	"lastname" => "Claras",
	"nbAchievements" => 6,
	"list" =>
	[
		[
			"name" => "Créations",
			"color" => "#00C851",
			"icon" => "fa fa-edit",
			"list" => [
				[
					"name" => "Portfolio",
					"icon" => "fa fa-user",
					"shortdesc" => "",
					"longdesc" => "",
					"pictures" => [
						
					]
				],
				[
					"name" => "Auto-formation",
					"icon" => "fa fa-graduation-cap",
					"shortdesc" => "",
					"longdesc" => "",
					"pictures" => [
						
					]
				],
			]
		],
		[
			"name" => "Codage",
			"color" => "#FFBB33",
			"icon" => "fa fa-pencil",
			"list" => [
				[
					"name" => "Meet Up",
					"icon" => "fa fa-flag",
					"shortdesc" => "",
					"longdesc" => "",
					"pictures" => [
						
					]
				],
			]
		]
	]
];


echo json_encode($json);