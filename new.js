$(function() {
    workbelt();
    workload();
});

// Get started!

function workbelt() {

    $('.view').click(function() {
        $('.work-belt').css('left', '-100%');
        $('.card').hide(400);
        $('.work-container').show();
    });


    $('.fa-arrow-circle-left').click(function() {
        $('.work-belt').css('left', '0%');
        $('.work-container').hide(800);
        $('.card').show();
    });
}

function workload() {
    $.ajaxSetup({ cache: true });

    $('.view').click(function() {
        var spinner = '<div class="loader">Loading...</div>',
            newHTML = 'student.html';
        $('.project-load').html(spinner).load(newHTML);
    });


}
