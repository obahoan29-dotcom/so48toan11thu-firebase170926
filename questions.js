const examData = {
    maDe: "DE77TOAN11",
    title: "ĐỀ SỐ 77 - ÔN TẬP LƯỢNG GIÁC 11",
    password: "",
    timeLimitMinutes: 45,
    
    // Cấu hình thời gian MỞ và ĐÓNG bài thi (Định dạng: YYYY-MM-DDTHH:mm:ss)
    // Ví dụ: Từ 08:00 ngày 17-09-2026 đến 08:00 ngày 18-09-2026
    examStartTimeStr: "2026-09-17T01:00:00",
    examEndTimeStr: "2026-09-18T22:00:00",
    
    images: {
        "img_34": "",
        "img_36": "",
        "img_39": "",
        "img_41": "",
        "Q24": "" // Đã thêm để hỗ trợ cho câu tự luận có hình vẽ bên dưới
    },
    questions: [
        // ==================== PHẦN 1. TRẮC NGHIỆM NHIỀU LỰA CHỌN ====================
        {
            id: 1,
            type: "multiple_choice",
            question: "Đẳng thức nào không đúng với mọi $x$?",
            options: [
                "$\\cos^2 3x = \\frac{1+\\cos 6x}{2}$",
                "$\\cos 2x = 1 - 2\\sin^2 x$",
                "$\\sin 2x = 2\\sin x \\cos x$",
                "$\\sin^2 2x = \\frac{1+\\cos 4x}{2}$"
            ],
            correct: 3,
            explanation: "Đẳng thức đúng phải là $\\sin^2 2x = \\frac{1-\\cos 4x}{2}$."
        },
        {
            id: 2,
            type: "multiple_choice",
            question: "Cho $\\sin \\alpha = -\\frac{3}{5}$ và $\\pi < \\alpha < \\frac{3\\pi}{2}$. Khi đó giá trị của $\\cos \\alpha$ và $\\tan \\alpha$ lần lượt là:",
            options: [
                "$-\\frac{4}{5}; \\frac{3}{4}$",
                "$-\\frac{4}{5}; -\\frac{3}{4}$",
                "$\\frac{4}{5}; -\\frac{3}{4}$",
                "$\\frac{3}{4}; -\\frac{4}{5}$"
            ],
            correct: 0,
            explanation: "Vì $\\pi < \\alpha < \\frac{3\\pi}{2}$ nên $\\cos \\alpha < 0 \\Rightarrow \\cos \\alpha = -\\sqrt{1-\\sin^2 \\alpha} = -\\frac{4}{5}$. Do đó $\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha} = \\frac{3}{4}$."
        },
        {
            id: 3,
            type: "multiple_choice",
            question: "Cho $\\cos a = \\frac{1}{\\sqrt{3}}$ và $0 < a < \\frac{\\pi}{2}$. Tính $\\sin a$.",
            options: [
                "$\\frac{\\sqrt{2}}{3}$",
                "$\\frac{\\sqrt{2}}{\\sqrt{3}}$",
                "$-\\frac{1}{3}$",
                "$\\frac{\\sqrt{2}}{5}$"
            ],
            correct: 1,
            explanation: "Vì $0 < a < \\frac{\\pi}{2}$ nên $\\sin a > 0 \\Rightarrow \\sin a = \\sqrt{1 - \\cos^2 a} = \\sqrt{1 - \\frac{1}{3}} = \\frac{\\sqrt{2}}{\\sqrt{3}}$."
        },
        {
            id: 4,
            type: "multiple_choice",
            question: "Cho $\\cos \\alpha = -\\frac{4}{5}$ với $\\frac{\\pi}{2} < \\alpha < \\pi$. Tính giá trị của biểu thức $M = 10\\sin \\alpha + 5\\cos \\alpha$.",
            options: [
                "-10",
                "2",
                "1",
                "$\\frac{1}{4}$"
            ],
            correct: 1,
            explanation: "Vì $\\frac{\\pi}{2} < \\alpha < \\pi$ nên $\\sin \\alpha > 0 \\Rightarrow \\sin \\alpha = \\sqrt{1 - \\cos^2 \\alpha} = \\frac{3}{5}$. Thay vào: $M = 10 \\cdot \\frac{3}{5} + 5 \\cdot (-\\frac{4}{5}) = 6 - 4 = 2$."
        },
        {
            id: 5,
            type: "multiple_choice",
            question: "Cho $\\cos \\alpha = -\\frac{1}{6}; (-\\pi < \\alpha < -\\frac{\\pi}{2})$. Tính $\\sin \\alpha$.",
            options: [
                "$\\sin \\alpha = -\\frac{\\sqrt{35}}{6}$",
                "$\\sin \\alpha = \\frac{35}{36}$",
                "$\\sin \\alpha = \\frac{5}{6}$",
                "$\\sin \\alpha = \\frac{\\sqrt{35}}{6}$"
            ],
            correct: 0,
            explanation: "Vì $-\\pi < \\alpha < -\\frac{\\pi}{2}$ nên $\\sin \\alpha < 0 \\Rightarrow \\sin \\alpha = -\\sqrt{1 - \\cos^2 \\alpha} = -\\sqrt{1 - \\frac{1}{36}} = -\\frac{\\sqrt{35}}{6}$."
        },
        {
            id: 6,
            type: "multiple_choice",
            question: "Cho $\\cos \\alpha = -\\frac{2}{3}$, tính $\\cos 2\\alpha$.",
            options: [
                "$-\\frac{1}{9}$",
                "$-\\frac{4}{3}$",
                "$\\frac{4}{3}$",
                "$-\\frac{2}{3}$"
            ],
            correct: 0,
            explanation: "Ta có $\\cos 2\\alpha = 2\\cos^2 \\alpha - 1 = 2 \\cdot (-\\frac{2}{3})^2 - 1 = 2 \\cdot \\frac{4}{9} - 1 = -\\frac{1}{9}$."
        },
        {
            id: 7,
            type: "multiple_choice",
            question: "Cho $\\sin 2\\alpha = -\\frac{4}{5}$ và $\\frac{3\\pi}{4} < \\alpha < \\pi$. Giá trị của $\\sin \\alpha$ là:",
            options: [
                "$\\frac{2}{5}$",
                "$\\frac{1}{5}$",
                "$\\frac{2\\sqrt{5}}{5}$",
                "$\\frac{\\sqrt{5}}{5}$"
            ],
            correct: 3,
            explanation: "Vì $\\frac{3\\pi}{4} < \\alpha < \\pi$ nên $\\cos 2\\alpha = -\\sqrt{1 - \\sin^2 2\\alpha} = -\\frac{3}{5}$. Ta có $1 - 2\\sin^2 \\alpha = -\\frac{3}{5} \\Rightarrow \\sin^2 \\alpha = \\frac{4}{5}$. Do $\\alpha \\in (\\frac{3\\pi}{4}; \\pi)$ nên $0 < \\sin \\alpha < \\frac{\\sqrt{2}}{2} \\Rightarrow \\sin \\alpha = \\frac{\\sqrt{5}}{5}$."
        },
        {
            id: 8,
            type: "multiple_choice",
            question: "Cho $\\tan x = -4$. Giá trị của biểu thức $A = \\frac{2\\sin x - 5\\cos x}{3\\cos x + \\sin x}$ là:",
            options: [
                "13",
                "-13",
                "$\\frac{13}{11}$",
                "5"
            ],
            correct: 0,
            explanation: "Chia cả tử và mẫu cho $\\cos x \\neq 0$: $A = \\frac{2\\tan x - 5}{3 + \\tan x} = \\frac{2(-4) - 5}{3 + (-4)} = 13$."
        },
        {
            id: 9,
            type: "multiple_choice",
            question: "Tập giá trị của hàm số $y = 4 - 3\\sin x$ là:",
            options: [
                "$[-7; -1]$",
                "$[-3; 4]$",
                "$[-1; 7]$",
                "$[1; 7]$"
            ],
            correct: 3,
            explanation: "Vì $-1 \\le \\sin x \\le 1 \\Rightarrow -3 \\le -3\\sin x \\le 3 \\Rightarrow 1 \\le 4 - 3\\sin x \\le 7$."
        },
        {
            id: 10,
            type: "multiple_choice",
            question: "Nghiệm của phương trình $2\\sin x + 1 = 0$ là:",
            options: [
                "$x = \\frac{\\pi}{6} + k2\\pi; x = \\frac{7\\pi}{6} + k2\\pi$",
                "$x = -\\frac{\\pi}{6} + k2\\pi; x = \\frac{7\\pi}{6} + k2\\pi$",
                "$x = \\pi + k2\\pi; x = \\frac{\\pi}{8} + k2\\pi$",
                "$x = -\\frac{\\pi}{6} + k2\\pi; x = \\frac{5\\pi}{6} + k2\\pi$"
            ],
            correct: 1,
            explanation: "$2\\sin x + 1 = 0 \\Leftrightarrow \\sin x = -\\frac{1}{2} = \\sin(-\\frac{\\pi}{6}) \\Leftrightarrow x = -\\frac{\\pi}{6} + k2\\pi$ hoặc $x = \\frac{7\\pi}{6} + k2\\pi$."
        },
        {
            id: 11,
            type: "multiple_choice",
            question: "[TH] Tập nghiệm của phương trình $\\cos(2x + \\frac{\\pi}{6}) = 0$ là:",
            options: [
                "$S = \\{-\\frac{\\pi}{6} + \\frac{k\\pi}{2} \\mid k \\in \\mathbb{Z}\\}$",
                "$S = \\{\\frac{\\pi}{6} + \\frac{k\\pi}{2} \\mid k \\in \\mathbb{Z}\\}$",
                "$S = \\{\\frac{\\pi}{3} + k\\pi \\mid k \\in \\mathbb{Z}\\}$",
                "$S = \\{\\frac{\\pi}{6} + k\\pi \\mid k \\in \\mathbb{Z}\\}$"
            ],
            correct: 1,
            explanation: "$\\cos(2x + \\frac{\\pi}{6}) = 0 \\Leftrightarrow 2x + \\frac{\\pi}{6} = \\frac{\\pi}{2} + k\\pi \\Leftrightarrow 2x = \\frac{\\pi}{3} + k\\pi \\Leftrightarrow x = \\frac{\\pi}{6} + \\frac{k\\pi}{2}$."
        },
        {
            id: 12,
            type: "multiple_choice",
            question: "[TH] Tập nghiệm của phương trình $\\tan(3x - \\frac{\\pi}{5}) = \\sqrt{3}$ là:",
            options: [
                "$S = \\{\\frac{2\\pi}{45} + \\frac{k\\pi}{3} \\mid k \\in \\mathbb{Z}\\}$",
                "$S = \\{\\frac{8\\pi}{15} + k\\pi \\mid k \\in \\mathbb{Z}\\}$",
                "$S = \\{-\\frac{2\\pi}{45} + \\frac{k\\pi}{3} \\mid k \\in \\mathbb{Z}\\}$",
                "$S = \\{\\frac{8\\pi}{45} + \\frac{k\\pi}{3} \\mid k \\in \\mathbb{Z}\\}$"
            ],
            correct: 3,
            explanation: "$\\tan(3x - \\frac{\\pi}{5}) = \\tan \\frac{\\pi}{3} \\Leftrightarrow 3x - \\frac{\\pi}{5} = \\frac{\\pi}{3} + k\\pi \\Leftrightarrow 3x = \\frac{8\\pi}{15} + k\\pi \\Leftrightarrow x = \\frac{8\\pi}{45} + \\frac{k\\pi}{3}$."
        },
        {
            id: 13,
            type: "multiple_choice",
            question: "[TH] Tập nghiệm của phương trình $\\cot(2x + \\frac{\\pi}{3}) = 1$ là:",
            options: [
                "$S = \\{-\\frac{\\pi}{24} + \\frac{k\\pi}{2} \\mid k \\in \\mathbb{Z}\\}$",
                "$S = \\{\\frac{\\pi}{24} + \\frac{k\\pi}{2} \\mid k \\in \\mathbb{Z}\\}$",
                "$S = \\{-\\frac{\\pi}{12} + k\\pi \\mid k \\in \\mathbb{Z}\\}$",
                "$S = \\{\\frac{7\\pi}{24} + \\frac{k\\pi}{2} \\mid k \\in \\mathbb{Z}\\}$"
            ],
            correct: 0,
            explanation: "$\\cot(2x + \\frac{\\pi}{3}) = \\cot \\frac{\\pi}{4} \\Leftrightarrow 2x + \\frac{\\pi}{3} = \\frac{\\pi}{4} + k\\pi \\Leftrightarrow 2x = -\\frac{\\pi}{12} + k\\pi \\Leftrightarrow x = -\\frac{\\pi}{24} + \\frac{k\\pi}{2}$."
        },
        {
            id: 14,
            type: "multiple_choice",
            question: "Giải phương trình $2\\cos x = -1$ được nghiệm là:",
            options: [
                "$\\{\\frac{\\pi}{3} + \\frac{k\\pi}{2}, k \\in \\mathbb{Z}\\}$",
                "$\\{\\frac{\\pi}{3} + k\\pi, k \\in \\mathbb{Z}\\}$",
                "$\\{-\\frac{\\pi}{3} + \\frac{k\\pi}{3}, k \\in \\mathbb{Z}\\}$",
                "$\\{\\pm\\frac{2\\pi}{3} + k2\\pi, k \\in \\mathbb{Z}\\}$"
            ],
            correct: 3,
            explanation: "$2\\cos x = -1 \\Leftrightarrow \\cos x = -\\frac{1}{2} = \\cos \\frac{2\\pi}{3} \\Leftrightarrow x = \\pm \\frac{2\\pi}{3} + k2\\pi$."
        },
        {
            id: 15,
            type: "multiple_choice",
            question: "Số nghiệm của phương trình $\\cos(x + \\frac{\\pi}{4}) = 1$ với $\\pi \\le x \\le 5\\pi$ là:",
            options: [
                "0",
                "3",
                "1",
                "2"
            ],
            correct: 3,
            explanation: "$\\cos(x + \\frac{\\pi}{4}) = 1 \\Leftrightarrow x = -\\frac{\\pi}{4} + k2\\pi$. Do $\\pi \\le x \\le 5\\pi \\Rightarrow \\frac{5}{8} \\le k \\le \\frac{21}{8} \\Rightarrow k \\in \\{1, 2\\}$. Vậy có 2 nghiệm."
        },
        {
            id: 16,
            type: "multiple_choice",
            question: "Phương trình $\\cos x = 0$ có nghiệm là:",
            options: [
                "$x = \\frac{\\pi}{2} + k\\pi (k \\in \\mathbb{Z})$",
                "$x = k2\\pi (k \\in \\mathbb{Z})$",
                "$x = \\frac{\\pi}{2} + k2\\pi (k \\in \\mathbb{Z})$",
                "$x = k\\pi (k \\in \\mathbb{Z})$"
            ],
            correct: 0,
            explanation: "Phương trình $\\cos x = 0 \\Leftrightarrow x = \\frac{\\pi}{2} + k\\pi$."
        },
        {
            id: 17,
            type: "multiple_choice",
            question: "Một bánh xe đạp có đường kính là $700\\text{ mm}$. Biết bánh xe quay được 15 vòng trong 6 giây. Quãng đường (làm tròn đến hàng đơn vị mét) mà người đi xe đã đi được trong thời gian 1 phút là:",
            options: [
                "165 m",
                "330 m",
                "660 m",
                "220 m"
            ],
            correct: 1,
            explanation: "Chu vi $C = 0{,}7\\pi\\text{ m}$. Trong 1 phút (60s), bánh xe quay được $(15/6) \\times 60 = 150$ vòng. Quãng đường $S = 150 \\times 0{,}7\\pi \\approx 330\\text{ m}$."
        },
        {
            id: 18,
            type: "multiple_choice",
            question: "Tập nghiệm $S$ của phương trình $\\sqrt{3}\\tan\\frac{x}{3} + 3 = 0$ là:",
            options: [
                "$S = \\{-\\frac{\\pi}{9} + k3\\pi, k \\in \\mathbb{Z}\\}$",
                "$S = \\{-\\frac{\\pi}{3} + k\\pi, k \\in \\mathbb{Z}\\}$",
                "$S = \\{-\\pi + k3\\pi, k \\in \\mathbb{Z}\\}$",
                "$S = \\{\\frac{\\pi}{6} + k\\pi, k \\in \\mathbb{Z}\\}$"
            ],
            correct: 2,
            explanation: "$\\tan\\frac{x}{3} = -\\sqrt{3} = \\tan(-\\frac{\\pi}{3}) \\Leftrightarrow \\frac{x}{3} = -\\frac{\\pi}{3} + k\\pi \\Leftrightarrow x = -\\pi + k3\\pi$."
        },
        {
            id: 19,
            type: "multiple_choice",
            question: "Nghiệm của phương trình $\\tan x - 1 = 0$ là:",
            options: [
                "$x = \\frac{\\pi}{6} + k\\frac{\\pi}{2}$",
                "$x = \\frac{3\\pi}{4} + k2\\pi$",
                "$x = -\\frac{\\pi}{4} + k\\pi$",
                "$x = \\frac{\\pi}{4} + k\\pi$"
            ],
            correct: 3,
            explanation: "$\\tan x = 1 \\Leftrightarrow x = \\frac{\\pi}{4} + k\\pi$."
        },
        {
            id: 20,
            type: "multiple_choice",
            question: "Nghiệm của phương trình $\\cot 2x = -\\sqrt{3}$ là:",
            options: [
                "$x = \\text{arccot}(\\frac{-\\sqrt{3}}{2}) + k\\pi, k \\in \\mathbb{Z}$",
                "$x = -\\frac{\\pi}{6} + k\\frac{\\pi}{2}, k \\in \\mathbb{Z}$",
                "$x = -\\frac{\\pi}{12} + k\\frac{\\pi}{2}, k \\in \\mathbb{Z}$",
                "$x = -\\frac{\\pi}{6} + k\\pi, k \\in \\mathbb{Z}$"
            ],
            correct: 2,
            explanation: "$\\cot 2x = -\\sqrt{3} = \\cot(-\\frac{\\pi}{6}) \\Leftrightarrow 2x = -\\frac{\\pi}{6} + k\\pi \\Leftrightarrow x = -\\frac{\\pi}{12} + k\\frac{\\pi}{2}$."
        },
        {
            id: 21,
            type: "multiple_choice",
            question: "Nghiệm của phương trình $\\cot x = \\frac{1}{\\sqrt{3}}$ là:",
            options: [
                "$x = \\frac{\\pi}{6} + k\\pi (k \\in \\mathbb{Z})$",
                "$x = \\frac{\\pi}{6} + k2\\pi (k \\in \\mathbb{Z})$",
                "$x = \\frac{\\pi}{3} + k\\pi (k \\in \\mathbb{Z})$",
                "$x = \\frac{\\pi}{3} + k2\\pi (k \\in \\mathbb{Z})$"
            ],
            correct: 2,
            explanation: "$\\cot x = \\frac{1}{\\sqrt{3}} = \\cot \\frac{\\pi}{3} \\Leftrightarrow x = \\frac{\\pi}{3} + k\\pi$."
        },
        {
            id: 22,
            type: "multiple_choice",
            question: "Nghiệm của phương trình $\\sqrt{3}\\cot(2x + \\frac{\\pi}{6}) = 1$ là:",
            options: [
                "$x = \\frac{\\pi}{12} + \\frac{k\\pi}{2}, k \\in \\mathbb{Z}$",
                "$x = \\pm \\frac{\\pi}{12} + \\frac{k\\pi}{2}, k \\in \\mathbb{Z}$",
                "$x = \\frac{\\pi}{6} + k\\pi, k \\in \\mathbb{Z}$",
                "$x = \\frac{\\pi}{3} + k\\pi, k \\in \\mathbb{Z}$"
            ],
            correct: 0,
            explanation: "$\\cot(2x + \\frac{\\pi}{6}) = \\frac{1}{\\sqrt{3}} \\Leftrightarrow 2x + \\frac{\\pi}{6} = \\frac{\\pi}{3} + k\\pi \\Leftrightarrow x = \\frac{\\pi}{12} + \\frac{k\\pi}{2}$."
        },
        {
            id: 23,
            type: "multiple_choice",
            question: "Hỏi trên $[0; \\frac{\\pi}{2}]$, phương trình $\\sin x = \\frac{1}{2}$ có bao nhiêu nghiệm?",
            options: [
                "1",
                "2",
                "3",
                "4"
            ],
            correct: 0,
            explanation: "Trên $[0; \\frac{\\pi}{2}]$, phương trình chỉ có 1 nghiệm là $x = \\frac{\\pi}{6}$."
        },
        {
            id: 24,
            type: "multiple_choice",
            question: "Số nghiệm của phương trình $\\sin(5x - \\frac{\\pi}{3}) = 1$ trên $[0; 2\\pi]$ là:",
            options: [
                "5",
                "3",
                "4",
                "2"
            ],
            correct: 0,
            explanation: "$5x - \\frac{\\pi}{3} = \\frac{\\pi}{2} + k2\\pi \\Leftrightarrow x = \\frac{\\pi}{6} + \\frac{k2\\pi}{5}$. Trên $[0; 2\\pi]$ có 5 giá trị $k \\in \\{0, 1, 2, 3, 4\\}$ thỏa mãn."
        },
        {
            id: 25,
            type: "multiple_choice",
            question: "Tổng nghiệm dương nhỏ nhất và nghiệm âm lớn nhất của phương trình $\\cos(2x - \\frac{\\pi}{6}) = \\frac{\\sqrt{3}}{2}$ là:",
            options: [
                "$\\frac{\\pi}{12}$",
                "$-\\frac{2\\pi}{3}$",
                "$\\frac{\\pi}{4}$",
                "$-\\frac{3\\pi}{4}$"
            ],
            correct: 1,
            explanation: "Nghiệm dương nhỏ nhất là $x = \\frac{\\pi}{6}$, nghiệm âm lớn nhất là $x = -\\frac{5\\pi}{6}$. Tổng hai nghiệm bằng $\\frac{\\pi}{6} + (-\\frac{5\\pi}{6}) = -\\frac{2\\pi}{3}$."
        },
        {
            id: 26,
            type: "multiple_choice",
            question: "Cho một cấp số cộng có $u_1 = -3; u_6 = 27$. Tìm $d$?",
            options: [
                "$d = 5$",
                "$d = 7$",
                "$d = 6$",
                "$d = 8$"
            ],
            correct: 2,
            explanation: "$u_6 = u_1 + 5d \\Leftrightarrow 27 = -3 + 5d \\Leftrightarrow 5d = 30 \\Leftrightarrow d = 6$."
        },
        {
            id: 27,
            type: "multiple_choice",
            question: "Cho cấp số cộng $(u_n)$ có $u_4 = -12, u_{14} = 18$. Tổng của 16 số hạng đầu tiên của cấp số cộng là:",
            options: [
                "$S = 24$",
                "$S = -24$",
                "$S = 26$",
                "$S = -25$"
            ],
            correct: 0,
            explanation: "$10d = 30 \\Rightarrow d = 3 \\Rightarrow u_1 = -21$. Tổng $S_{16} = \\frac{16}{2}(2(-21) + 15 \\cdot 3) = 24$."
        },
        {
            id: 28,
            type: "multiple_choice",
            question: "Cho cấp số cộng $(u_n)$ có $u_5 = -15, u_{20} = 60$. Tìm $u_1, d$ của cấp số cộng?",
            options: [
                "$u_1 = -35, d = -5$",
                "$u_1 = -35, d = 5$",
                "$u_1 = 35, d = -5$",
                "$u_1 = 35, d = 5$"
            ],
            correct: 1,
            explanation: "$15d = 75 \\Rightarrow d = 5 \\Rightarrow u_1 = u_5 - 4d = -15 - 20 = -35$."
        },
        {
            id: 29,
            type: "multiple_choice",
            question: "Xác định số hạng đầu và công sai của cấp số cộng, biết: $\\begin{cases} u_5 - u_2 = 6 \\\\ u_6 + u_3 = 12 \\end{cases}$",
            options: [
                "$u_1 = -1, d = 2$",
                "$u_1 = 1, d = 3$",
                "$u_1 = 2, d = 3$",
                "$u_1 = 1, d = 2$"
            ],
            correct: 0,
            explanation: "Hệ $\\begin{cases} 3d = 6 \\\\ 2u_1 + 7d = 12 \\end{cases} \\Leftrightarrow \\begin{cases} d = 2 \\\\ u_1 = -1 \\end{cases}$."
        },
        {
            id: 30,
            type: "multiple_choice",
            question: "Cho dãy số cấp số cộng $d = -2; S_8 = 72$. Tính $u_1$?",
            options: [
                "$u_1 = 16$",
                "$u_1 = -16$",
                "$u_1 = \\frac{1}{16}$",
                "$u_1 = -\\frac{1}{16}$"
            ],
            correct: 0,
            explanation: "$S_8 = \\frac{8}{2}(2u_1 + 7(-2)) = 72 \\Leftrightarrow 2u_1 - 14 = 18 \\Leftrightarrow u_1 = 16$."
        },
        {
            id: 31,
            type: "multiple_choice",
            question: "Cho dãy số cấp số cộng $u_1 = -1, d = 2, S_n = 483$. Tính số các số hạng của cấp số cộng?",
            options: [
                "$n = 20$",
                "$n = 21$",
                "$n = 22$",
                "$n = 23$"
            ],
            correct: 3,
            explanation: "$S_n = \\frac{n}{2}[-2 + 2(n-1)] = n(n-2) = 483 \\Leftrightarrow n^2 - 2n - 483 = 0 \\Rightarrow n = 23$."
        },

        // ==================== PHẦN 2. TRẮC NGHIỆM ĐÚNG SAI ====================
        {
            id: 32,
            type: "true_false",
            question: "Cho hàm số $f(x) = 2\\sin(3x + \\frac{\\pi}{6}) - 1$. Xét tính đúng/sai của các khẳng định sau:",
            statements: [
                { id: "a", statement: "Tập xác định của hàm số là $\\mathbb{R}$.", correct: true },
                { id: "b", statement: "Hàm số tuần hoàn với chu kỳ $\\frac{2\\pi}{3}$.", correct: true },
                { id: "c", statement: "Tập giá trị của hàm số là $[-2; 1]$.", correct: false },
                { id: "d", statement: "$f(0) = 0$.", correct: true }
            ],
            explanation: "a) Đúng.\nb) Đúng vì $T = \\frac{2\\pi}{3}$.\nc) Sai vì TGT là $[-3; 1]$.\nd) Đúng vì $f(0) = 2\\sin(\\frac{\\pi}{6}) - 1 = 0$."
        },
        {
            id: 33,
            type: "true_false",
            question: "Cho phương trình lượng giác $\\sin(3x + \\frac{\\pi}{3}) = -\\frac{\\sqrt{3}}{2}$. Xét tính đúng/sai của các khẳng định sau:",
            statements: [
                { id: "a", statement: "Phương trình có nghiệm $x = \\frac{\\pi}{3} + k\\frac{2\\pi}{3} \\quad (k \\in \\mathbb{Z})$.", correct: false },
                { id: "b", statement: "Phương trình có nghiệm âm lớn nhất bằng $-\\frac{2\\pi}{9}$.", correct: true },
                { id: "c", statement: "Trên khoảng $(0; \\frac{\\pi}{2})$, phương trình đã cho có 3 nghiệm.", correct: false },
                { id: "d", statement: "Tổng các nghiệm của phương trình trong khoảng $(0; \\frac{\\pi}{2})$ bằng $\\frac{7\\pi}{9}$.", correct: true }
            ],
            explanation: "a) Sai.\nb) Đúng ($x = -\\frac{2\\pi}{9}$).\nc) Sai (chỉ có 2 nghiệm $\\frac{4\\pi}{9}$ và $\\frac{\\pi}{3}$ trên khoảng đó).\nd) Đúng (tổng $\\frac{4\\pi}{9} + \\frac{\\pi}{3} = \\frac{7\\pi}{9}$)."
        },
        {
            id: 34,
            type: "true_false",
            question: "Một vật dao động xung quanh vị trí cân bằng theo phương trình $x = 1{,}5\\cos(\\frac{t\\pi}{4})$; trong đó $t$ là thời gian tính bằng giây và quãng đường $h = |x|$ tính bằng mét là khoảng cách theo phương ngang của chất điểm đối với vị trí cân bằng. Xét tính đúng/sai của các khẳng định sau:",
            imageKey: "img_34",
            statements: [
                { id: "a", statement: "Vật ở xa vị trí cân bằng nhất nghĩa là $h = 1{,}5\\text{ m}$.", correct: true },
                { id: "b", statement: "Trong 10 giây đầu tiên, có hai thời điểm vật ở xa vị trí cân bằng nhất.", correct: false },
                { id: "c", statement: "Khi vật ở vị trí cân bằng thì $\\cos(\\frac{t\\pi}{4}) = 0$.", correct: true },
                { id: "d", statement: "Trong khoảng từ 0 đến 20 giây thì vật đi qua vị trí cân bằng 4 lần?", correct: false }
            ],
            explanation: "a) Đúng.\nb) Sai vì có 3 thời điểm $t \\in \\{0, 4, 8\\}$.\nc) Đúng.\nd) Sai vì trong $(0; 20)$ có 5 thời điểm $t \\in \\{2, 6, 10, 14, 18\\}$."
        },

        // ==================== PHẦN 3. TRẮC NGHIỆM TRẢ LỜI NGẮN ====================
        {
            id: 35,
            type: "short_answer",
            question: "Cho $\\sin x = \\frac{1}{3}$ và $0 < x < \\frac{\\pi}{2}$. Tính $\\cos x$, làm tròn 1 số sau dấu phẩy.",
            correctAnswer: "0.9",
            explanation: "$\\cos x = \\sqrt{1 - (1/3)^2} = \\sqrt{8/9} \\approx 0{,}9428 \\approx 0{,}9$."
        },
        {
            id: 36,
            type: "short_answer",
            question: "Cho đồ thị $y = \\sin x$. Tìm số nghiệm của phương trình $\\sin x = 0$ trên $[-3\\pi; 2\\pi]$.",
            imageKey: "img_36",
            correctAnswer: "6",
            explanation: "$\\sin x = 0 \\Leftrightarrow x = k\\pi$. Các nghiệm thuộc $[-3\\pi; 2\\pi]$ là $\\{-3\\pi, -2\\pi, -\\pi, 0, \\pi, 2\\pi\\}$, gồm 6 nghiệm."
        },
        {
            id: 37,
            type: "short_answer",
            question: "Một cảm biến dao động theo mô hình $s(t) = 4\\cos(\\frac{\\pi t}{3})$. Trong khoảng thời gian $0 \\le t \\le 12$, có bao nhiêu thời điểm cảm biến đi qua vị trí cân bằng $s = 0$?",
            correctAnswer: "4",
            explanation: "$s(t) = 0 \\Leftrightarrow t = 1{,}5 + 3k$. Do $0 \\le t \\le 12 \\Rightarrow k \\in \\{0, 1, 2, 3\\}$. Có 4 thời điểm."
        },
        {
            id: 38,
            type: "short_answer",
            question: "Tính $\\cos(a + \\frac{\\pi}{6})$ biết $\\sin a = \\frac{1}{\\sqrt{3}}$ và $\\frac{\\pi}{2} < a < \\pi$, kết quả làm tròn 1 chữ số thập phân.",
            correctAnswer: "-1.0",
            explanation: "$\\cos a = -\\sqrt{2/3}$. Do đó $\\cos(a + \\frac{\\pi}{6}) = \\cos a \\cos \\frac{\\pi}{6} - \\sin a \\sin \\frac{\\pi}{6} = -\\frac{\\sqrt{2}}{2} - \\frac{1}{2\\sqrt{3}} \\approx -0{,}9958 \\approx -1{,}0$."
        },
        {
            id: 39,
            type: "short_answer",
            question: "Một chiếc đu quay có bán kính $75\\text{m}$, tâm của vòng quay ở độ cao $90\\text{m}$, thời gian thực hiện mỗi vòng quay của đu quay là 30 phút. Nếu một người vào cabin tại vị trí thấp nhất của vòng quay, thì sau 20 phút quay, người đó ở độ cao bao nhiêu mét?",
            imageKey: "img_39",
            correctAnswer: "127.5",
            explanation: "Độ cao $h(t) = 90 - 75\\cos(\\frac{\\pi t}{15})$. Với $t = 20 \\Rightarrow h(20) = 90 - 75\\cos(\\frac{4\\pi}{3}) = 90 + 37{,}5 = 127{,}5\\text{ m}$."
        },
        {
            id: 40,
            type: "short_answer",
            question: "Một bánh xe đạp quay được 25 vòng trong 10 giây. Tính độ dài quãng đường mà người đi xe thực hiện được trong 2,35 phút, biết rằng bán kính bánh xe bằng $340\\text{mm}$. (Tính theo đơn vị mét, kết quả làm tròn đến hàng phần trăm).",
            correctAnswer: "753.04",
            explanation: "Thời gian $t = 141\\text{s} \\Rightarrow$ số vòng $N = 352{,}5$. Quãng đường $S = N \\times 2\\pi R = 352{,}5 \\times 0{,}68\\pi \\approx 753{,}04\\text{ m}$."
        },
        {
            id: 41,
            type: "short_answer",
            question: "Trên đồng hồ, tại thời điểm buổi sáng đang xét, kim giờ chỉ số 3, kim phút chỉ số 12. Đến khi kim phút và kim giờ gặp nhau lần cuối cùng trước 9h thì kim phút quay được một góc lượng giác bằng bao nhiêu radian? (Kết quả lấy đến hàng đơn vị).",
            imageKey: "img_41",
            correctAnswer: "-36",
            explanation: "Thời gian từ 3h00 đến lần gặp cuối trước 9h là $t = \\frac{63}{11}\\text{ giờ}$. Bằng $5{,}727\\text{ vòng}$. Góc lượng giác kim phút quay được: $\\theta = -2\\pi \\times \\frac{63}{11} \\approx -35{,}985 \\approx -36\\text{ rad}$."
        },

        // ==================== PHẦN 4. TỰ LUẬN ĐIỀN ĐÁP ÁN VÀ NỘP BÀI LÀM ====================
        {
            id: 42,
            type: "essay",
            question: "Vận tốc của một tàu con thoi từ lúc cất cánh tại thời điểm $t = 0$ (s) cho đến thời điểm $t = 100$ (s) được cho bởi công thức $v(t) = 0,0015t^3 - 0,085t^2 + 70$ (đơn vị: ft/s). Hỏi trong thời gian đó tàu con thoi đạt vận tốc lớn nhất bằng bao nhiêu ft/s (kết quả làm tròn đến hàng đơn vị)?",
            imageKey: "",
            correctAnswer: "2083",
            explanation: "Xét $v'(t) = 0,0045t^2 - 0,17t = 0 \\Leftrightarrow t = 0$ hoặc $t = \\frac{340}{9} \\approx 37,78$. Tính $v(0) = 70$, $v(37,78) \\approx 29,63$, $v(100) = 2083$ ft/s. Vậy $v_{max} \\approx 2083$ ft/s."
        },
        {
            id: 43,
            type: "essay",
            question: "Cho hàm số $y = ax^3 + bx^2 + cx + d$ có đồ thị như hình vẽ bên. Tính giá trị biểu thức $T = a + 2b + 3c + 4d$.",
            imageKey: "Q24",
            correctAnswer: "-17",
            explanation: "Xác định được hàm số $f(x) = -x^3 + 3x - 4 \\Rightarrow a = -1, b = 0, c = 3, d = -4$. Đáp số đề cho $T = -17$."
        },
        {
            id: 44,
            type: "essay",
            question: "Người ta muốn sản xuất một bể nước theo dạng khối lăng trụ tứ giác đều, không có nắp trên, làm bằng kính và có thể tích là $32\\text{ m}^3$. Biết giá của mỗi mét vuông kính là $600.000$ đồng. Số tiền tối thiểu phải trả để làm bể nước trên là bao nhiêu triệu đồng (làm tròn kết quả đến hàng phần chục của triệu đồng)?",
            imageKey: "",
            correctAnswer: "28,8",
            explanation: "Gọi cạnh đáy là $a$, chiều cao $h$. Thể tích $V = a^2 h = 32 \\Rightarrow h = \\frac{32}{a^2}$. Diện tích kính $S = a^2 + 4ah = a^2 + \\frac{128}{a} \\ge 48\\text{ m}^2$. Số tiền tối thiểu: $48 \\times 0,6 = 28,8$ triệu đồng."
        },
        {
            id: 45,
            type: "essay",
            question: "Một bác nông dân có $360\\text{ m}$ hàng rào và muốn rào lại một khu đất hình chữ nhật tiếp giáp với một con sông. Bác nông dân không cần rào cho phía giáp bờ sông. Hỏi bác nông dân có thể rào được khu đất với diện tích lớn nhất là bao nhiêu mét vuông?",
            imageKey: "",
            correctAnswer: "16200",
            explanation: "Gọi hai chiều rộng vuông góc sông là $x$, chiều dài song song sông là $360 - 2x$. Diện tích $S(x) = x(360 - 2x) = 360x - 2x^2$. Đạt giá trị lớn nhất $S_{max} = 16200\\text{ m}^2$ khi $x = 90$."
        }
    ]
};
