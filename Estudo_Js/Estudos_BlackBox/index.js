        // javascript qrcode generator?
            const qrcode = new QRCode(document.getElementById('qrcode'), {
            text: 'http://jindo.dev.naver.com/collie',
            width: 128,
            height: 128,
            colorDark : '#000',
            colorLight : '#fff',
            correctLevel : QRCode.CorrectLevel.H
            });

            <div id="qrcode"></div>

            const qrElement = document.getElementById('qrcode');

            const qrUrl = 'https://davidshimjs.github.io/qrcodejs/';

            const qrcode = new QRCode(document.getElementById('qrcode'), {
            text: qrUrl,
            width: 128,
            height: 128,
            colorDark : '#000',
            colorLight : '#fff',
            correctLevel : QRCode.CorrectLevel.H
            });

            const qrActionButtons = Array.from(qrElement.querySelectorAll('.qr-action'));

            qrActionButtons.find(b => b.dataset.qrAction === 'visit').href = qrUrl;

        document.addEventListener('click', e => {
        if (e.target) {
            if (qrActionButtons.indexOf(e.target) !== -1) {
            const button = e.target;
            const action = button.dataset.qrAction;
            if (action === 'download') {
                const a = document.createElement('a');
                a.download = 'QR-Code.png';
                a.href = qrElement.querySelector('img').src;
                console.log(a.href);
                a.click();
                a.remove();
            } else if (action === 'copy') {
                fetch(qrElement.querySelector('img').src).then(res => res.blob()).then(blob => navigator.clipboard.write([new ClipboardItem({[blob.type]:blob})]));
            } else if (action === 'visit') {
                // handled organically
            }
            }
        }
        });



    <div id="qrcode"><button class="qr-action" data-qr-action="download"></button><button class="qr-action" data-qr-action="copy"></button><a class="qr-action" data-qr-action="visit" target="_blank" title="Visit QR Source"></a></div>



    //Source: https://stackoverflow.com/questions/67403923
