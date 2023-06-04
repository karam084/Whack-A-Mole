window.addEventListener('DOMContentLoaded', () => {

  setInterval(() => {
    const moleHeads = document.querySelectorAll(' .wgs__mole-head,.wgs__mole-head1,.wgs__mole-head2, .wgs__mole-head3, .wgs__mole-head4,.wgs__mole-head5');
    for (let moleHead of moleHeads) {
      moleHead.classList.toggle('wgs__mole-head--hidden');
    }
  }, 1000);
});

function whack(event) {
  event.target.classList.add('wgs__mole-head--hidden');
}


