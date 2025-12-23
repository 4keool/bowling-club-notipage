export function Crush() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center">
                        <span className="mr-3">🎳</span>
                        크러쉬 볼링 동호회 회칙 & 규정
                    </h1>
                </div>

                {/* Rules Container */}
                <div className="space-y-6">
                    {/* Rule 1: Purpose */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            1. 목적
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            본 크러쉬 볼링클럽 은 볼링을 사랑하는 회원들이 모여 친목을 도모하고, 실력 향상과 건전한 여가 생활을 추구함을 목적으로 한다.
                        </p>
                    </div>

                    {/* Rule 2: Membership & Duties */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            2. 회원 자격 및 의무
                        </h2>
                        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                            <li className="flex items-start">
                                <span className="font-bold mr-2">1.</span>
                                <span>본 동호회는 <span className="font-bold">정회원</span>으로만 구성</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold mr-2">2.</span>
                                <span>정회원은 회칙을 준수하고, 정해진 회비를 납부한 자</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold mr-2">3.</span>
                                <span>활동이 장기간 없는 회원은 운영진 협의를 통해 정리</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold mr-2">4.</span>
                                <span>타인을 존중하고 예의를 지킬 것</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold mr-2">5.</span>
                                <span>클럽 이미지 손상 행동 금지</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold mr-2">6.</span>
                                <span>모임 참여 시 적극적인 협력</span>
                            </li>
                        </ul>
                    </div>

                    {/* Rule 3: Structure */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            3. 운영 구조
                        </h2>
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                                (1) 운영진
                            </h3>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                                <li className="flex items-center">
                                    <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">회장</span>
                                    <span>전체 운영 총괄</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
