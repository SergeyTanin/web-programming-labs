            console.log("Всем привет!!! :)");
            console.error("Сообщение об ошибке");
            console.warn("Сообщение-предупреждение");

            function notReadyAlert() {
                // alert('Sorry, not ready yet!\nИзвините, еще не готово!');
                let modal = document.getElementsByClassName('modal')[0];
                modal.style.display = 'block';

                document.body.style.overflow = 'hidden';
                let overlay = document.getElementsByClassName('overlay')[0];
                overlay.style.display = 'block';
                return false;
            }
            function hideModal() {
                let modal = document.getElementsByClassName('modal')[0];
                modal.style.display = 'none';

                document.body.style.overflow = 'auto';
                let overlay = document.getElementsByClassName('overlay')[0];
                overlay.style.display = 'none';
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