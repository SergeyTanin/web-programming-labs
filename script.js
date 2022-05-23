            console.log("Всем привет!!! :)");
            console.error("Сообщение об ошибке");
            console.warn("Сообщение-предупреждение");

            function showModal(messageText, buttonText) {
                let modal = document.getElementsByClassName('modal')[0];
                modal.style.display = 'block';

                let message = modal.getElementsByClassName('message')[0];
                message.innerHTML = messageText;
                let button = modal.getElementsByTagName ('button')[0];
                button.innerHTML = buttonText;

                document.body.style.overflow = 'hidden';
                let overlay = document.getElementsByClassName('overlay')[0];
                overlay.style.display = 'block';
            }
            function hideModal() {
                let modal = document.getElementsByClassName('modal')[0];
                modal.style.display = 'none';

                document.body.style.overflow = 'auto';
                let overlay = document.getElementsByClassName('overlay')[0];
                overlay.style.display = 'none';
            }
            function notReadyAlert() {
                showModal('Sorry, not ready yet!<br>Извините, ещё не готово!','Эх, жаль');
                return false;
            }

            function search() {
                let name = document.getElementById('search').value;
                let productNumber = null;
                if (name == 'Кроссовки') {
                    productNumber = 0;
                } else if (name == 'Носки') {
                    productNumber = 1;
                } else if (name == 'Футболки') {
                    productNumber = 2;
                } else if (name == 'Шорты') {
                    productNumber = 3;
                } else if (name == 'Кепки') {
                    productNumber = 4;      
                } else {
                    alert('Товар не найден');
                }
                
                let cards = document.getElementsByClassName('card');
                let card = cards[productNumber];
                card.style.border = '1px dashed red';
                card.style.backgroundColor = 'green';

                setTimeout(function() {
                    card.style.border = 'none';
                    card.style.backgroundColor = '';
                }, 2000);
            }

            function loaded() {
                let searchbox = document.getElementById('search');
                searchbox.addEventListener('keydown', function (key) {
                    if(key.key == 'Enter')
                    search();
                });
            }