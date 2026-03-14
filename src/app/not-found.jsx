import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-lg w-full text-center">
        {/* বড় করে 404 টেক্সট */}
        <h1 className="text-9xl font-extrabold text-indigo-600 animate-bounce">
          404
        </h1>

        {/* মেসেজ */}
        <h2 className="text-3xl font-bold text-gray-800 mt-4">
          ওহ! পেজটি পাওয়া যায়নি
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          আপনি যে পেজটি খুঁজছেন সেটি হয়তো মুছে ফেলা হয়েছে অথবা লিংকটি ভুল। নিচের
          বাটনে ক্লিক করে মূল পাতায় ফিরে যান।
        </p>

        {/* অ্যাকশন বাটন */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-indigo-200"
          >
            হোমপেজে ফিরে যান
          </Link>

          <Link
            href="/contact"
            className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 transition-all duration-300"
          >
            সাপোর্টে যোগাযোগ করুন
          </Link>
        </div>

        {/* নিচের ছোট ডেকোরেশন */}
        <div className="mt-12">
          <div className="inline-block p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-400 italic">
              "মাঝে মাঝে হারিয়ে যাওয়াও একটা অ্যাডভেঞ্চার!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
