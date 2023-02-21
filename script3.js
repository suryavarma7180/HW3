<script>
    const products = document.querySelectorAll('.product');
    const cart = document.querySelector('.cart');

    let draggedProduct = null;

        // add event listeners to each product
        products.forEach(product => {
        product.addEventListener('dragstart', dragStart);
    product.addEventListener('dragend', dragEnd);
        });

    // add event listeners to cart
    cart.addEventListener('dragover', dragOver);
    cart.addEventListener('dragenter', dragEnter);
    cart.addEventListener('dragleave', dragLeave);
    cart.addEventListener('drop', drop);

    // drag start event handler
    function dragStart(event) {
        draggedProduct = event.target;
    event.dataTransfer.setData('text/plain', event.target.id);
            setTimeout(() => event.target.classList.add('dragging'), 0);
        }

    // drag end event handler
    function dragEnd(event) {
        draggedProduct = null;
    event.target.classList.remove('dragging');
        }

    // drag over event handler
    function dragOver(event) {
        event.preventDefault();
        }

    // drag enter event handler
    function dragEnter(event) {
        event.preventDefault();
    cart.classList.add('dragging-over');
        }

    // drag leave event handler
    function dragLeave(event) {
        cart.classList.remove('dragging-over');
        }

    // drop event handler
    function drop(event) {
        event.preventDefault();
    cart.classList.remove('dragging-over');
    const productId = event.dataTransfer.getData('text/plain');
    const product = document.getElementById(productId);
    cart.appendChild(product);
        }
</script>