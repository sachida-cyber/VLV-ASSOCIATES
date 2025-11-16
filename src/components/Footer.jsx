export default function Footer(){
  return (
    <footer className="mt-10 p-6 bg-gray-50 text-sm">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between">
        <div>© {new Date().getFullYear()} VLV ASSOCIATES — Licensed & Insured</div>
        <div>Service areas: [List cities]</div>
      </div>
    </footer>
  );
}
