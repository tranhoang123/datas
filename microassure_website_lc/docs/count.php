<?php

$curl = curl_init();

$api_key = 'cadb5c0ec1df1d96421eba5e4faa72f2-us13';
$username = 'guanhao3797@gmail.com';
$list_id = '77d7dd4491';

curl_setopt_array($curl, array(
		CURLOPT_URL => "http://us13.api.mailchimp.com/3.0/lists/",
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_ENCODING => "",
		CURLOPT_MAXREDIRS => 10,
		CURLOPT_TIMEOUT => 30,
		CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		CURLOPT_CUSTOMREQUEST => "GET",
		CURLOPT_HTTPHEADER => array(
			"authorization: ".'Basic ' . base64_encode( $username . ':' . $api_key ),
			"cache-control: no-cache",
			"content-type: application/x-www-form-urlencoded"
		),
	)
);

$response = curl_exec($curl);
$err = curl_error($curl);
$sumcount = 0;

curl_close($curl);

if ($err) {
	echo "cURL Error #:" . $err;
} else {
	$a = json_decode($response,true);
	foreach($a['lists'] as $v){
		if (strcmp($v['id'], $list_id) === 0) {
			$sumcount += $v['stats']['member_count'];
		}
	}
}

echo number_format(50383 + $sumcount);