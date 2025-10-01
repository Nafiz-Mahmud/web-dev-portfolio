export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-[1.5rem] lg:text-[3rem] py-[1rem] text-center animate-pulse text-white font-bold bg-gray-900">
      &copy; Nafiz Mahmud | {year}
    </footer>
  );
}
