<html>
<body>

<?php
	if (isset($_POST['email']))
	//if "email" is filled out, send email
	{
		//send email
		$email = $_POST['email'] ;
		$name= $_POST['name'] ;
		$comments = $_POST['comments'] ;

		$message="You've got a inquiry from your prospective client!!\n\n";
		$message.= "Name: ".$name."\n";
		$message.="Email: ".$email."\n";
		$message.="Comments: ".$comments;

		mail("info@shrewd-design.com", "Inquiry",
		$message, "From:" . $email);
		echo "<h1>Thank you. We'll be<br> in touch with you <br>shortly!</h1>";
	}
	else
	//if "email" is not filled out, display the form
	{
		echo "<h1>There was a problem. Please  try again.</h1>";
	}
?>

</body>
</html>