$(function (){
    let form = $('#form_pointage');
    form.on('change', function (e) {
        $('.invalid-feedback').remove();
        if(this.checkValidity())
        {
            let formSerialize = form.serialize();
            $.post(form.attr('action'), formSerialize+'&check=true', function (data) {
                if (data.errors) {
                    Object.keys(data.errors).map(function (key) {
                        $('#pointage_' + key).addClass('is-invalid').after('<div class="invalid-feedback">' + data.errors[key][0] + '</div>');
                    })
                } else {
                    $('#form_pointage_submit_btn').removeClass('disabled')
                    form.find('input,select').removeClass('is-invalid').addClass('is-valid')
                }
            })
        }
    })
    $('button[data-href]').on('click touch',function (e){
        window.location.href = $(this).data('href')
    })
    $('[id*="_date"]').mask("00/00/0000", {clearIfNotMatch: true});
})