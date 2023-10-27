export default function Footer() {
  return (
    <footer className="bg-neutral p-10 text-neutral-content">
      <div className="footer m-auto max-w-7xl">
        <div>
          <span className="footer-title">SERVIÇOS</span>
          <a className="link-hover link">Marca</a>
          <a className="link-hover link">Projeto</a>
          <a className="link-hover link">Marketing</a>
          <a className="link-hover link">Anúncio</a>
        </div>
        <div>
          <span className="footer-title">EMPRESA</span>
          <a className="link-hover link">Sobre nós</a>
          <a className="link-hover link">Contato</a>
          <a className="link-hover link">Empregos</a>
          <a className="link-hover link">kit de imprensa</a>
        </div>
        <div>
          <span className="footer-title">JURÍDICO</span>
          <a className="link-hover link">Termos de uso</a>
          <a className="link-hover link">Política de Privacidade</a>
          <a className="link-hover link">Política de cookies</a>
        </div>
      </div>
    </footer>
  );
}
