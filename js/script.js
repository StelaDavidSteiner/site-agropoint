document.addEventListener('DOMContentLoaded', () => {
  const botoesDias = document.querySelectorAll('.dia-btn');
  const inputDia = document.getElementById('diaEscolhido');
  const nomeInput = document.getElementById('nome');
  const whatsappBtn = document.getElementById('whatsappBtn');
  const msg = document.getElementById('mensagemSucesso');

  botoesDias.forEach(btn => {
    btn.addEventListener('click', () => {
      botoesDias.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      inputDia.value = btn.getAttribute('data-dia');
    });
  });

  whatsappBtn.addEventListener('click', e => {
    e.preventDefault();

    const nome = nomeInput.value.trim();
    const dia = inputDia.value;

    if (!nome || !dia) {
      alert("Preencha seu nome completo e selecione um dia.");
      return;
    }

    const texto = `Olá, meu nome é ${nome} e quero confirmar presença no dia ${dia}.`;
    const mensagem = encodeURIComponent(texto);
    const numero = "5541996175009";
    const link = `https://wa.me/${numero}?text=${mensagem}`;

    console.log("Link do WhatsApp:", link);

    msg.style.display = 'block';
    window.open(link, '_blank');

    nomeInput.value = '';
    inputDia.value = '';
    botoesDias.forEach(b => b.classList.remove('selected'));

    setTimeout(() => msg.style.display = 'none', 3000);
  });
});
