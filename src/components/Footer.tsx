const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40">
      <div className="max-w-2xl mx-4 md:mx-auto py-4 flex justify-center align-middle">
        <div className="text-sm text-foreground/60">
          {year} © <span className="text-foreground">Nhac Tat Nguyen</span>.
          All right reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
