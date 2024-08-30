<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        .container {
            width: 100%;
            max-width: 600px;
            background-color: #fff;
            margin: 0 auto;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-left: 5px solid #081F4D;
        }
        .header {
            background-color: #081F4D;
            color: #fff;
            padding: 10px 20px;
            text-align: center;
            border-radius: 5px 5px 0 0;
        }
        .content {
            padding: 20px;
            font-size: 16px;
            color: #3B4D71;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            color: #777;
        }
        .highlight {
            color: #0083FF;
            font-weight: bold;
        }
        .email {
            color: #D3D3D3;
        }
        @media only screen and (max-width: 480px) {
            .container {
                padding: 10px;
                width: 95%;
            }
            .header, .content, .footer {
                padding: 15px;
                text-align: left;
            }
            .header h2 {
                font-size: 18px;
            }
            .content {
                font-size: 14px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Korisnik {{ $subject }} <i class="email">({{ $email }})</i> šalje vam poruku</h2>
        </div>
        <div class="content">
            <p>{{ $mailMessage }}</p>
        </div>
        <div class="footer">
            <p>Hvala vam na korištenju naših usluga!</p>
        </div>
    </div>
</body>
</html>
