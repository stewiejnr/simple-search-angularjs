<?php
	//include('configuration.php');
	$id = $_GET["resid"];
	
	//$dstore = mysql_query('select ');
	
	//$row = mysql_fetch_assoc($dstore))

	
	
	echo $id;
	?>
	<head>
		<link href="assets/styler.css" rel="stylesheet" />
		<link href="assets/css/bootstrap.min.css" rel="stylesheet" />
	</head>
	<table id="attendeeinfo">
		<tr>
			<th>Guest Name</th><th>#Guest</th><th>TYPE</th><th>Check In</th>
		</tr>
		<tr>
			<td>Ric Stew</td><td>1</td><td>VIP</td>
			<td>
			<input type="checkbox" name="arrive" value="y">Yes
			</td>
		</tr>
	</table>
	<table id="guestinfo">
				<tr>
			<th>Guest Name</th><th>TYPE</th><th>Check In</th>
			
		</tr>
		<tr>
			<td>Guest</td>
		</tr>
	</table>
	
	<?php
?>