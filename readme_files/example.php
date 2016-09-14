<div class="greeting">
<?php

function greet($name){
	printf('greetings ' . $name . "\n");
}

if(count($argv) > 1){
	greet($argv[1]);
}else{
	printf("I don\'t know who you are\n");
}

?>
</div>
