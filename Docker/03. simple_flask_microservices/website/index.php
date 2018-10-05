<html>
	<head>
		<title>My Shop</title>
	</head>
	<body>
		<h1>Welcome to my shop</h1>
		<ul>
			<?php 
				$json = file_get_contents('http://product-service');
				$obj = json_decode($json);
				
				$prod = $obj->products;
				foreach($prod as $row){
					echo "<li>$row</li>";
				}
			?>
		</ul>
	</body>
	
</html>