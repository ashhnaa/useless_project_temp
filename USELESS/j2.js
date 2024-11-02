$(document).ready(function () {
     $('.stack').click(function () {
        $(".card").each(function (index) {
            setTimeout(function () {
                $(".card").eq(index).css({
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    transition: 'all 0.5s ease'
                });
            }, index * 100);
        });
    });

    $('.spread').click(function () {
        const numCards = $(".card").length;
        const angleIncrement = (2 * Math.PI) / numCards;
        const spreadRadius = 200;

        $(".card").each(function (index) {
            const angle = index * angleIncrement;
            const x = Math.cos(angle) * spreadRadius;
            const y = Math.sin(angle) * spreadRadius;

            setTimeout(function () {
                $(".card").eq(index).css({
                    position: 'absolute',
                    top: `calc(50% + ${y}px)`,
                    left: `calc(50% + ${x}px)`,
                    transform: 'translate(-50%, -50%)',
                    transition: 'all 0.5s ease'
                });
            }, index * 100);
        });
    });
    const cardData = [
        { image: 'C:/Users/catha/Code/USELESS/s-l1200.jpg', description: "" },
        // Add more 
    ];
    
    $(document).ready(function () {
        $('#modal').hide();
        $('.card').click(function () {
            const randomItem = cardData[Math.floor(Math.random() * cardData.length)];
            
            $('#modalImage').attr('src', randomItem.image);
            $('#modalDescription').text(randomItem.description);
    
            $('#modal').fadeIn();
        });
    
        $('#modal').click(function (e) {
            if (e.target === this) {
                $(this).fadeOut();
            }
        });
    });
    
    
});
