<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>File Upload to Google Drive</title>

    <style>

        body { font-family: sans-serif; padding: 20px; }

        .upload-container { max-width: 400px; margin: auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; }

        input[type="file"], button { width: 100%; margin-top: 10px; padding: 10px; }

        #status { margin-top: 15px; font-weight: bold; }

    </style>

</head>

<body>



<div class="upload-container">

    <h3>Upload a File</h3>

    <input type="file" id="fileInput">

    <button onclick="uploadFile()">Upload to Drive</button>

    <div id="status"></div>

</div>



<script>

    // REPLACE WITH YOUR WEB APP URL FROM STEP 3

    const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbyBOINKmBAWLjI1K_NtMTz_jS3cevMfwvtO7wHW6vw6kzLTX7WrorSiAl_88RbVIEll1w/exec';



    function uploadFile() {

        const fileInput = document.getElementById('fileInput');

        const statusDiv = document.getElementById('status');

        const file = fileInput.files[0];



        if (!file) {

            statusDiv.innerText = "Please select a file first.";

            statusDiv.style.color = "red";

            return;

        }



        statusDiv.innerText = "Uploading... please wait.";

        statusDiv.style.color = "blue";



        const reader = new FileReader();

        

        // When the file is read, convert it and send it

        reader.onload = function(e) {

            // Remove the base64 metadata prefix (e.g., "data:image/png;base64,")

            const base64Data = e.target.result.split(',')[1]; 



            const formData = new URLSearchParams();

            formData.append('filename', file.name);

            formData.append('mimeType', file.type);

            formData.append('fileData', base64Data);



            fetch(WEB_APP_URL, {

                method: 'POST',

                body: formData

            })

            .then(response => response.text())

            .then(result => {

                statusDiv.innerText = result;

                statusDiv.style.color = result.includes("Error") ? "red" : "green";

                fileInput.value = ""; // Clear the input

            })

            .catch(error => {

                statusDiv.innerText = "Upload failed: " + error;

                statusDiv.style.color = "red";

            });

        };



        // Read the file as a Data URL (base64)

        reader.readAsDataURL(file);

    }

</script>



</body>

</html>
