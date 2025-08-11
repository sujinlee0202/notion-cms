export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <a href="https://www.naver.com" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
        네이버로 이동
      </a>
    </div>
  );
}
