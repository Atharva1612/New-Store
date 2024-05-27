document.addEventListener("DOMContentLoaded", function() {
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');

    function functiona() {
        let items = document.querySelectorAll('.item');
        if (items.length > 0) {
            // Append the first item to the end of the '.slide' container
            document.querySelector('.slide').appendChild(items[0]);
        }
    }

    if (next && prev) { // Ensure elements are not null before adding event listeners
        next.addEventListener('click', functiona);

        prev.addEventListener('click', function() {
            let items = document.querySelectorAll('.item');
            if (items.length > 0) {
                // Prepend the last item to the beginning of the '.slide' container
                document.querySelector('.slide').prepend(items[items.length - 1]);
            }
        });
    } else {
        console.error("Elements with IDs 'next' and/or 'prev' not found.");
    }
});
