import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowDown, ArrowRight, Plus, X } from 'lucide-react';

const YOLOPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title
    {
      type: 'title',
      title: 'Kiến Trúc CNN & YOLO',
      subtitle: 'Giải Thích Trực Quan với Tính Toán'
    },

    // Slide 2: Why gradual reduction - Visual
    {
      type: 'custom',
      title: 'Tại Sao Giảm Channels Từ Từ?',
      component: () => (
        <div className="flex gap-8 h-full items-center">
          <div className="flex-1">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-red-600 mb-4">❌ Giảm đột ngột 512→16</h3>
              <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-500 text-white px-6 py-8 rounded text-3xl font-bold">512</div>
                  <ArrowRight className="text-red-600" size={48} />
                  <div className="bg-blue-300 text-white px-6 py-8 rounded text-3xl font-bold">16</div>
                </div>
                <p className="text-xl text-red-700">⚠️ Mất nhiều thông tin ngay lập tức!</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-green-600 mb-4">✅ Giảm dần 512→256→128→16</h3>
              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white px-4 py-6 rounded text-2xl font-bold">512</div>
                  <ArrowRight className="text-green-600" size={32} />
                  <div className="bg-blue-500 text-white px-4 py-6 rounded text-2xl font-bold">256</div>
                  <ArrowRight className="text-green-600" size={32} />
                  <div className="bg-blue-400 text-white px-4 py-6 rounded text-2xl font-bold">128</div>
                  <ArrowRight className="text-green-600" size={32} />
                  <div className="bg-blue-300 text-white px-4 py-6 rounded text-2xl font-bold">16</div>
                </div>
                <p className="text-xl text-green-700">✨ Nén thông tin từ từ, không mất mát!</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 text-xl space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg">📚 <strong>Hierarchical Learning</strong></div>
            <div className="bg-orange-50 p-4 rounded-lg">🎯 <strong>Tránh Bottleneck</strong></div>
            <div className="bg-blue-50 p-4 rounded-lg">📈 <strong>Gradient Flow Tốt</strong></div>
            <div className="bg-green-50 p-4 rounded-lg">🧠 <strong>Học Features Tốt Hơn</strong></div>
          </div>
        </div>
      )
    },

    // NEW: Slide Math - Convolution Formula
    {
      type: 'custom',
      title: '📐 Convolution Layer - Công Thức Toán Học',
      component: () => (
        <div className="flex gap-4 h-full">
          <div className="flex-1">
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-400 mb-3">
              <h3 className="text-xl font-bold mb-2 text-blue-700">Công Thức</h3>
              <div className="bg-white p-3 rounded font-mono text-lg">
                Y[i,j] = Σ Σ X[i+m, j+n] × W[m,n] + b
              </div>
              <div className="text-sm mt-2 text-gray-600">
                Trong đó: X = input, W = weights (kernel), b = bias
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-400">
              <h3 className="text-xl font-bold mb-2 text-green-700">Tác Dụng</h3>
              <div className="space-y-1 text-base">
                <div>• Trích xuất đặc trưng từ ảnh</div>
                <div>• Phát hiện patterns (cạnh, góc, texture)</div>
                <div>• Shared weights → giảm tham số</div>
                <div>• Translation invariance</div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Ví Dụ Tính Toán 3×3 Kernel</h3>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="font-bold mb-1">Input (3×3):</div>
                  <div className="bg-white p-2 rounded font-mono">
                    [1  2  3]<br/>
                    [4  5  6]<br/>
                    [7  8  9]
                  </div>
                </div>
                <div>
                  <div className="font-bold mb-1">Kernel (3×3):</div>
                  <div className="bg-white p-2 rounded font-mono">
                    [0  -1  0]<br/>
                    [-1  5 -1]<br/>
                    [0  -1  0]
                  </div>
                </div>
              </div>

              <div className="mt-3 bg-yellow-100 p-3 rounded">
                <div className="font-bold mb-1">Tính Toán:</div>
                <div className="font-mono text-sm space-y-1">
                  <div>= 1×0 + 2×(-1) + 3×0</div>
                  <div>+ 4×(-1) + 5×5 + 6×(-1)</div>
                  <div>+ 7×0 + 8×(-1) + 9×0</div>
                  <div className="border-t border-yellow-400 pt-1 mt-1">
                  = 0 - 2 + 0 - 4 + 25 - 6 + 0 - 8 + 0</div>
                  <div className="text-green-600 font-bold text-base">= 5</div>
                </div>
              </div>

              <div className="mt-2 text-xs text-gray-600">
                Kernel này phát hiện edges (Laplacian filter)
              </div>
            </div>
          </div>
        </div>
      )
    },

    // NEW: Batch Normalization Formula
    {
      type: 'custom',
      title: '📐 Batch Normalization - Công Thức Toán Học',
      component: () => (
        <div className="flex gap-4 h-full">
          <div className="flex-1">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-400 mb-3">
              <h3 className="text-xl font-bold mb-2 text-green-700">Công Thức</h3>
              <div className="bg-white p-3 rounded space-y-2">
                <div className="font-mono text-base">
                  μ = (1/m) Σ x<sub>i</sub>
                </div>
                <div className="font-mono text-base">
                  σ² = (1/m) Σ (x<sub>i</sub> - μ)²
                </div>
                <div className="font-mono text-base border-t pt-2">
                  x̂ = (x - μ) / √(σ² + ε)
                </div>
                <div className="font-mono text-base">
                  y = γx̂ + β
                </div>
              </div>
              <div className="text-xs mt-2 text-gray-600">
                γ (gamma) và β (beta) là learnable parameters
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-400">
              <h3 className="text-xl font-bold mb-2 text-purple-700">Tác Dụng</h3>
              <div className="space-y-1 text-base">
                <div>• Ổn định phân bố activations</div>
                <div>• Giảm internal covariate shift</div>
                <div>• Cho phép learning rate cao hơn</div>
                <div>• Regularization effect</div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Ví Dụ Tính Toán (batch=3)</h3>
            <div className="bg-gray-50 p-3 rounded-lg space-y-2">
              <div className="bg-white p-2 rounded">
                <div className="font-bold text-sm mb-1">Input batch:</div>
                <div className="font-mono text-sm">x₁=1.5, x₂=3.5, x₃=5.5</div>
              </div>

              <div className="bg-blue-100 p-2 rounded">
                <div className="font-bold text-sm mb-1">Bước 1: Tính mean (μ)</div>
                <div className="font-mono text-sm">
                  μ = (1.5 + 3.5 + 5.5) / 3 = 3.5
                </div>
              </div>

              <div className="bg-blue-100 p-2 rounded">
                <div className="font-bold text-sm mb-1">Bước 2: Tính variance (σ²)</div>
                <div className="font-mono text-sm">
                  σ² = [(1.5-3.5)² + (3.5-3.5)² + (5.5-3.5)²] / 3<br/>
                  = [4 + 0 + 4] / 3 = 2.67<br/>
                  σ = √2.67 ≈ 1.63
                </div>
              </div>

              <div className="bg-green-100 p-2 rounded">
                <div className="font-bold text-sm mb-1">Bước 3: Normalize (ε=0.001)</div>
                <div className="font-mono text-sm">
                  x̂₁ = (1.5 - 3.5) / 1.63 = -1.23<br/>
                  x̂₂ = (3.5 - 3.5) / 1.63 = 0.00<br/>
                  x̂₃ = (5.5 - 3.5) / 1.63 = 1.23
                </div>
              </div>

              <div className="bg-yellow-100 p-2 rounded">
                <div className="font-bold text-sm mb-1">Bước 4: Scale & Shift (γ=1, β=0)</div>
                <div className="font-mono text-sm">
                  y₁ = 1×(-1.23) + 0 = -1.23<br/>
                  y₂ = 1×(0.00) + 0 = 0.00<br/>
                  y₃ = 1×(1.23) + 0 = 1.23
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // NEW: ReLU Formula
    {
      type: 'custom',
      title: '📐 ReLU Activation - Công Thức Toán Học',
      component: () => (
        <div className="flex gap-3 h-full">
          <div className="flex-1 space-y-2">
            <div className="bg-purple-50 p-2 rounded-lg border-2 border-purple-400">
              <h3 className="text-lg font-bold mb-1 text-purple-700">Công Thức</h3>
              <div className="bg-white p-2 rounded">
                <div className="font-mono text-xl text-center">
                  f(x) = max(0, x)
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-2 rounded-lg border-2 border-orange-400">
              <h3 className="text-base font-bold mb-1 text-orange-700">Tác Dụng</h3>
              <div className="text-sm space-y-0.5">
                <div>• Phi tuyến (non-linearity)</div>
                <div>• Sparse activation</div>
                <div>• Không vanishing gradient</div>
              </div>
            </div>

            <div className="bg-red-50 p-2 rounded-lg border-2 border-red-300">
              <h3 className="text-base font-bold mb-1 text-red-700">Vấn Đề: Dying ReLU</h3>
              <div className="text-sm">
                Neuron output âm → gradient = 0 → "chết"
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2">Ví Dụ & Graph</h3>
            
            <div className="bg-gray-50 p-2 rounded-lg mb-2">
              <div className="space-y-1 text-sm font-mono">
                <div className="bg-green-100 p-1 rounded">f(3.5) = 3.5 ✅</div>
                <div className="bg-green-100 p-1 rounded">f(1.2) = 1.2 ✅</div>
                <div className="bg-red-100 p-1 rounded">f(-1.5) = 0.0 ❌</div>
                <div className="bg-red-100 p-1 rounded">f(-3.2) = 0.0 ❌</div>
              </div>
            </div>

            <div className="bg-white p-2 rounded-lg border-2 border-gray-300 mb-2">
              <div className="font-bold mb-1 text-center text-sm">ReLU Function</div>
              <svg viewBox="0 0 200 100" className="w-full">
                <line x1="10" y1="50" x2="190" y2="50" stroke="#999" strokeWidth="1"/>
                <line x1="100" y1="10" x2="100" y2="90" stroke="#999" strokeWidth="1"/>
                <line x1="10" y1="50" x2="100" y2="50" stroke="#e74c3c" strokeWidth="3"/>
                <line x1="100" y1="50" x2="190" y2="10" stroke="#2ecc71" strokeWidth="3"/>
                <circle cx="100" cy="50" r="3" fill="#3498db"/>
                <text x="95" y="65" fontSize="10" fill="#666">0</text>
                <text x="20" y="45" fontSize="9" fill="#e74c3c">f(x)=0</text>
                <text x="140" y="25" fontSize="9" fill="#2ecc71">f(x)=x</text>
              </svg>
            </div>

            <div className="bg-blue-50 p-1.5 rounded-lg">
              <div className="text-xs">
                <strong>LeakyReLU:</strong> f(x) = x if x&gt;0, else 0.01x
              </div>
            </div>
          </div>
        </div>
      )
    },

    // NEW: Conv → BN → ReLU Combined
    {
      type: 'custom',
      title: '🔗 Kết Hợp Conv → BN → ReLU',
      component: () => (
        <div className="flex flex-col h-full gap-3">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-lg text-center">
            <div className="text-2xl font-bold">Tại Sao Phải Theo Thứ Tự Này?</div>
          </div>

          <div className="flex gap-3 flex-1">
            <div className="flex-1 bg-green-50 p-3 rounded-lg border-2 border-green-400">
              <h3 className="text-lg font-bold text-green-700 mb-2">✅ Đúng: Conv → BN → ReLU</h3>
              
              <div className="space-y-2 text-sm">
                <div className="bg-white p-2 rounded">
                  <strong>Conv output:</strong> [100, -50, 200, -30]<br/>
                  <span className="text-red-600">→ Không ổn định!</span>
                </div>
                
                <div className="bg-blue-100 p-2 rounded">
                  <strong>Sau BN:</strong> [0.8, -0.4, 1.5, -0.2]<br/>
                  <span className="text-green-600">→ Đã chuẩn hóa!</span>
                </div>
                
                <div className="bg-purple-100 p-2 rounded">
                  <strong>Sau ReLU:</strong> [0.8, 0, 1.5, 0]<br/>
                  <span className="text-green-600">→ Vẫn ổn định!</span>
                </div>

                <div className="bg-green-200 p-2 rounded font-bold">
                  ✅ Gradient flow tốt<br/>
                  ✅ Training ổn định<br/>
                  ✅ Convergence nhanh
                </div>
              </div>
            </div>

            <div className="flex-1 bg-red-50 p-3 rounded-lg border-2 border-red-400">
              <h3 className="text-lg font-bold text-red-700 mb-2">❌ Sai: Conv → ReLU → BN</h3>
              
              <div className="space-y-2 text-sm">
                <div className="bg-white p-2 rounded">
                  <strong>Conv output:</strong> [100, -50, 200, -30]<br/>
                  <span className="text-red-600">→ Không ổn định!</span>
                </div>
                
                <div className="bg-yellow-100 p-2 rounded">
                  <strong>Sau ReLU:</strong> [100, 0, 200, 0]<br/>
                  <span className="text-orange-600">→ Mất thông tin âm!</span>
                </div>
                
                <div className="bg-orange-100 p-2 rounded">
                  <strong>Sau BN:</strong> [0.3, -0.6, 1.2, -0.6]<br/>
                  <span className="text-red-600">→ Phân bố lệch!</span>
                </div>

                <div className="bg-red-200 p-2 rounded font-bold">
                  ❌ Gradient không ổn<br/>
                  ❌ Training chậm<br/>
                  ❌ Kém performance
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-3 rounded-lg border-2 border-blue-400">
            <h3 className="text-lg font-bold text-blue-700 mb-2">📊 So Sánh Performance</h3>
            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              <div>
                <div className="font-bold">Thứ tự</div>
              </div>
              <div>
                <div className="font-bold text-green-600">Conv→BN→ReLU</div>
              </div>
              <div>
                <div className="font-bold text-red-600">Conv→ReLU→BN</div>
              </div>
              
              <div className="text-left">Training Speed:</div>
              <div className="text-green-600 font-bold">1.0×</div>
              <div className="text-red-600">0.7×</div>
              
              <div className="text-left">Final Accuracy:</div>
              <div className="text-green-600 font-bold">92%</div>
              <div className="text-red-600">85%</div>
              
              <div className="text-left">Gradient Stability:</div>
              <div className="text-green-600 font-bold">Cao</div>
              <div className="text-red-600">Thấp</div>
            </div>
          </div>
        </div>
      )
    },

    // NEW: Gradient Concept
    {
      type: 'custom',
      title: '📉 Gradient & Backpropagation',
      component: () => (
        <div className="flex gap-3 h-full">
          <div className="flex-1">
            <div className="bg-purple-50 p-3 rounded-lg border-2 border-purple-400 mb-3">
              <h3 className="text-xl font-bold mb-2 text-purple-700">Gradient Là Gì?</h3>
              <div className="text-base space-y-2">
                <div className="bg-white p-2 rounded">
                  <strong>Gradient = Đạo hàm của Loss theo từng parameter</strong>
                </div>
                <div className="font-mono text-sm bg-white p-2 rounded">
                  ∂L/∂w = lim[h→0] (L(w+h) - L(w)) / h
                </div>
                <div className="text-sm">
                  Cho biết: Thay đổi w thế nào để giảm Loss?
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-3 rounded-lg border-2 border-blue-400 mb-3">
              <h3 className="text-xl font-bold mb-2 text-blue-700">Chain Rule</h3>
              <div className="bg-white p-2 rounded font-mono text-sm">
                ∂L/∂w₁ = (∂L/∂y) × (∂y/∂z) × (∂z/∂w₁)
              </div>
              <div className="text-xs mt-1">
                Gradient "chảy ngược" từ output về input
              </div>
            </div>

            <div className="bg-green-50 p-3 rounded-lg border-2 border-green-400">
              <h3 className="text-xl font-bold mb-2 text-green-700">Weight Update</h3>
              <div className="bg-white p-2 rounded space-y-1">
                <div className="font-mono text-base">
                  w<sub>new</sub> = w<sub>old</sub> - α × ∂L/∂w
                </div>
                <div className="text-xs text-gray-600">
                  α = learning rate (thường 0.001 - 0.1)
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Ví Dụ Backpropagation</h3>
            
            <div className="bg-gray-50 p-3 rounded-lg space-y-2">
              <div className="bg-white p-2 rounded border-2 border-blue-400">
                <div className="font-bold text-sm mb-1">Forward Pass:</div>
                <div className="font-mono text-xs space-y-0.5">
                  <div>x = 2.0</div>
                  <div>w = 3.0, b = 1.0</div>
                  <div>z = w×x + b = 3×2 + 1 = 7.0</div>
                  <div>y = ReLU(z) = max(0, 7) = 7.0</div>
                  <div>Loss = (y - target)² = (7-5)² = 4.0</div>
                </div>
              </div>

              <div className="bg-white p-2 rounded border-2 border-red-400">
                <div className="font-bold text-sm mb-1">Backward Pass:</div>
                <div className="font-mono text-xs space-y-0.5">
                  <div className="text-red-600">∂L/∂y = 2(y-target) = 2(7-5) = 4.0</div>
                  <div className="text-red-600">∂y/∂z = 1 (vì z&gt;0)</div>
                  <div className="text-red-600">∂z/∂w = x = 2.0</div>
                  <div className="text-red-600">∂z/∂b = 1.0</div>
                  <div className="border-t border-red-300 mt-1 pt-1"></div>
                  <div className="text-green-600 font-bold">∂L/∂w = 4.0 × 1 × 2.0 = 8.0</div>
                  <div className="text-green-600 font-bold">∂L/∂b = 4.0 × 1 × 1.0 = 4.0</div>
                </div>
              </div>

              <div className="bg-green-100 p-2 rounded">
                <div className="font-bold text-sm mb-1">Update (α=0.01):</div>
                <div className="font-mono text-xs space-y-0.5">
                  <div>w<sub>new</sub> = 3.0 - 0.01×8.0 = 2.92</div>
                  <div>b<sub>new</sub> = 1.0 - 0.01×4.0 = 0.96</div>
                </div>
              </div>

              <div className="bg-blue-100 p-2 rounded text-xs">
                <strong>Kết quả:</strong> Loss giảm từ 4.0 → 3.7 sau 1 iteration
              </div>
            </div>
          </div>
        </div>
      )
    },

    // NEW: Gradient Problems
    {
      type: 'custom',
      title: '⚠️ Vấn Đề Gradient: Vanishing & Exploding',
      component: () => (
        <div className="flex gap-3 h-full">
          <div className="flex-1 bg-red-50 p-3 rounded-lg border-2 border-red-400">
            <h3 className="text-xl font-bold mb-2 text-red-700">Vanishing Gradient</h3>
            
            <div className="bg-white p-2 rounded mb-2">
              <div className="font-bold text-sm mb-1">Vấn đề:</div>
              <div className="text-sm">
                Gradient quá nhỏ (→0) khi backprop qua nhiều layers
              </div>
            </div>

            <div className="bg-white p-2 rounded mb-2">
              <div className="font-bold text-sm mb-1">Ví dụ:</div>
              <div className="font-mono text-xs space-y-1">
                <div>Layer 10: ∂L/∂w₁₀ = 0.5</div>
                <div>Layer 5: ∂L/∂w₅ = 0.01</div>
                <div>Layer 1: ∂L/∂w₁ = 0.00001 ≈ 0</div>
              </div>
              <div className="text-xs text-red-600 mt-1">
                → Layer đầu không học được!
              </div>
            </div>

            <div className="bg-yellow-100 p-2 rounded mb-2">
              <div className="font-bold text-sm mb-1">Nguyên nhân:</div>
              <div className="text-xs space-y-0.5">
                <div>• Sigmoid/Tanh: gradient ≤ 0.25</div>
                <div>• Nhân nhiều số &lt;1: kết quả →0</div>
                <div>• Network sâu (nhiều layers)</div>
              </div>
            </div>

            <div className="bg-green-100 p-2 rounded">
              <div className="font-bold text-sm mb-1">Giải pháp:</div>
              <div className="text-xs space-y-0.5">
                <div>✅ ReLU activation (gradient=1)</div>
                <div>✅ Batch Normalization</div>
                <div>✅ Residual connections (skip)</div>
                <div>✅ Better initialization</div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-orange-50 p-3 rounded-lg border-2 border-orange-400">
            <h3 className="text-xl font-bold mb-2 text-orange-700">Exploding Gradient</h3>
            
            <div className="bg-white p-2 rounded mb-2">
              <div className="font-bold text-sm mb-1">Vấn đề:</div>
              <div className="text-sm">
                Gradient quá lớn (→∞) khiến training không ổn định
              </div>
            </div>

            <div className="bg-white p-2 rounded mb-2">
              <div className="font-bold text-sm mb-1">Ví dụ:</div>
              <div className="font-mono text-xs space-y-1">
                <div>Layer 1: ∂L/∂w₁ = 2.0</div>
                <div>Layer 5: ∂L/∂w₅ = 100.0</div>
                <div>Layer 10: ∂L/∂w₁₀ = 10000.0</div>
              </div>
              <div className="text-xs text-orange-600 mt-1">
                → Weights thay đổi quá mạnh!
              </div>
            </div>

            <div className="bg-red-100 p-2 rounded mb-2">
              <div className="font-bold text-sm mb-1">Hậu quả:</div>
              <div className="text-xs space-y-0.5">
                <div>• Loss = NaN (overflow)</div>
                <div>• Weights →∞</div>
                <div>• Training diverge</div>
              </div>
            </div>

            <div className="bg-green-100 p-2 rounded">
              <div className="font-bold text-sm mb-1">Giải pháp:</div>
              <div className="text-xs space-y-0.5">
                <div>✅ Gradient Clipping</div>
                <div>✅ Lower learning rate</div>
                <div>✅ Batch Normalization</div>
                <div>✅ Weight regularization (L2)</div>
              </div>
            </div>
          </div>

          <div className="w-64">
            <div className="bg-blue-50 p-3 rounded-lg border-2 border-blue-400 mb-2">
              <h3 className="text-lg font-bold mb-2 text-blue-700">Gradient Clipping</h3>
              <div className="bg-white p-2 rounded font-mono text-xs">
                if ||g|| &gt; threshold:<br/>
                &nbsp;&nbsp;g = g × (threshold/||g||)
              </div>
              <div className="text-xs mt-1">
                Giới hạn gradient norm ≤ threshold
              </div>
            </div>

            <div className="bg-purple-50 p-3 rounded-lg border-2 border-purple-400">
              <h3 className="text-lg font-bold mb-2 text-purple-700">Tại Sao BN Giúp?</h3>
              <div className="text-xs space-y-1">
                <div>• Chuẩn hóa activations</div>
                <div>• Gradient không phụ thuộc vào scale</div>
                <div>• Smooth loss surface</div>
                <div>• Ổn định training</div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // NEW: CSP Block Detailed Calculation
    {
      type: 'custom',
      title: '🔢 CSP Block - Tính Toán Chi Tiết Matrix',
      component: () => (
        <div className="flex gap-3 h-full">
          <div className="flex-1">
            <div className="bg-blue-50 p-3 rounded-lg border-2 border-blue-400 mb-2">
              <h3 className="text-lg font-bold mb-2 text-blue-700">Input Setup</h3>
              <div className="bg-white p-2 rounded text-sm font-mono">
                Input: 4 channels × 3×3 spatial<br/>
                Shape: (4, 3, 3)
              </div>
            </div>

            <div className="bg-gray-50 p-2 rounded-lg mb-2">
              <div className="font-bold text-sm mb-1">Channel 1 (ngang):</div>
              <div className="bg-white p-2 rounded font-mono text-xs">
                [[0, 0, 0],<br/>
                &nbsp;[5, 5, 5],<br/>
                &nbsp;[0, 0, 0]]
              </div>
            </div>

            <div className="bg-gray-50 p-2 rounded-lg mb-2">
              <div className="font-bold text-sm mb-1">Channel 2 (dọc):</div>
              <div className="bg-white p-2 rounded font-mono text-xs">
                [[0, 3, 0],<br/>
                &nbsp;[0, 3, 0],<br/>
                &nbsp;[0, 3, 0]]
              </div>
            </div>

            <div className="bg-gray-50 p-2 rounded-lg">
              <div className="font-bold text-sm mb-1">Channel 3, 4:</div>
              <div className="bg-white p-2 rounded font-mono text-xs">
                All zeros
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2">CSP Processing</h3>
            
            <div className="bg-yellow-50 p-2 rounded-lg border-2 border-yellow-400 mb-2">
              <div className="font-bold text-sm mb-1">Split 50/50:</div>
              <div className="text-xs space-y-1">
                <div className="bg-white p-1 rounded font-mono">
                  Part1 (bypass): [Ch1, Ch2]<br/>
                  Part2 (process): [Ch3, Ch4]
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-2 rounded-lg border-2 border-green-400 mb-2">
              <div className="font-bold text-sm mb-1">Residual Block (trên Part2):</div>
              <div className="text-xs">
                Conv 3×3 với weights W<sub>1</sub><br/>
                Shape: (2→2, 3, 3)<br/>
                Output: [Ch3', Ch4']
              </div>
            </div>

            <div className="bg-purple-50 p-2 rounded-lg border-2 border-purple-400 mb-2">
              <div className="font-bold text-sm mb-1">Concatenate:</div>
              <div className="text-xs font-mono bg-white p-2 rounded">
                Part1: [Ch1, Ch2] (original)<br/>
                Part2: [Ch3''', Ch4'''] (processed)<br/>
                ─────────────────<br/>
                Output: [Ch1, Ch2, Ch3''', Ch4''']<br/>
                Shape: (4, 3, 3)
              </div>
            </div>

            <div className="bg-blue-100 p-2 rounded">
              <div className="font-bold text-sm">Tính Toán Chi Tiết (1 pixel):</div>
              <div className="text-xs font-mono mt-1">
                Position (1,1):<br/>
                Ch1: 5 (bypass, giữ nguyên)<br/>
                Ch2: 3 (bypass, giữ nguyên)<br/>
                Ch3''': 0 → W×0 = 2.1 (processed)<br/>
                Ch4''': 0 → W×0 = 1.8 (processed)<br/>
                <span className="text-green-600">Final: [5, 3, 2.1, 1.8]</span>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // NEW: SPP Detailed Calculation
    {
      type: 'custom',
      title: '🔢 SPP - Tính Toán Chi Tiết MaxPooling',
      component: () => (
        <div className="flex gap-3 h-full">
          <div className="flex-1">
            <div className="bg-purple-50 p-3 rounded-lg border-2 border-purple-400 mb-2">
              <h3 className="text-lg font-bold mb-2">Input: P5 Feature Map</h3>
              <div className="text-sm font-mono bg-white p-2 rounded">
                Shape: (256, 26, 26)<br/>
                Lấy 1 channel, xét pixel (13,13)
              </div>
            </div>

            <div className="bg-gray-50 p-2 rounded-lg mb-2">
              <div className="font-bold text-sm mb-1">Vùng 5×5 xung quanh (13,13):</div>
              <div className="bg-white p-2 rounded font-mono text-xs">
                [1.2, 2.1, 3.4, 1.8, 0.9]<br/>
                [0.5, 2.5, 4.1, 2.2, 1.3]<br/>
                [1.8, 3.2, <span className="text-red-600">[2.5]</span>, 3.8, 2.1] ← center<br/>
                [0.9, 2.8, 3.5, 2.9, 1.5]<br/>
                [1.1, 2.3, 2.7, 2.0, 1.4]
              </div>
            </div>

            <div className="bg-yellow-100 p-2 rounded-lg">
              <div className="font-bold text-sm mb-1">MaxPool 5×5:</div>
              <div className="text-xs">
                Tìm giá trị MAX trong vùng 5×5<br/>
                <span className="text-green-600 font-mono text-base">Max = 4.1</span>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2">4 Nhánh Song Song</h3>
            
            <div className="space-y-2">
              <div className="bg-gray-100 p-2 rounded text-sm">
                <strong>Nhánh 1×1:</strong> 2.5 (pixel gốc)
              </div>

              <div className="bg-yellow-100 p-2 rounded text-sm">
                <strong>MaxPool 5×5:</strong><br/>
                <div className="font-mono text-xs mt-1">
                  Vùng: 5×5 = 25 values<br/>
                  Max(1.2, 2.1, ..., 4.1, ...) = <span className="text-green-600">4.1</span>
                </div>
              </div>

              <div className="bg-orange-100 p-2 rounded text-sm">
                <strong>MaxPool 9×9:</strong><br/>
                <div className="font-mono text-xs mt-1">
                  Vùng: 9×9 = 81 values<br/>
                  Max(all values) = <span className="text-green-600">5.8</span>
                </div>
              </div>

              <div className="bg-red-100 p-2 rounded text-sm">
                <strong>MaxPool 13×13:</strong><br/>
                <div className="font-mono text-xs mt-1">
                  Vùng: 13×13 = 169 values<br/>
                  Max(all values) = <span className="text-green-600">7.2</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-2 rounded-lg border-2 border-green-400 mt-2">
              <div className="font-bold text-sm mb-1">Concatenate Output:</div>
              <div className="font-mono text-xs bg-white p-2 rounded">
                Tại pixel (13,13), mỗi channel có 4 giá trị:<br/>
                Ch_i: [2.5, 4.1, 5.8, 7.2]<br/>
                <br/>
                Tất cả 256 channels:<br/>
                256 × 4 = 1024 channels total<br/>
                <br/>
                Conv 1×1 (1024→512):<br/>
                Final shape: (512, 26, 26)
              </div>
            </div>
          </div>
        </div>
      )
    },

    // NEW: FPN Upsampling Calculation
    {
      type: 'custom',
      title: '🔢 FPN - Tính Toán Upsample & Element-wise Add',
      component: () => (
        <div className="flex gap-3 h-full">
          <div className="flex-1">
            <div className="bg-purple-50 p-3 rounded-lg border-2 border-purple-400 mb-2">
              <h3 className="text-lg font-bold mb-2">P5 → P4 Calculation</h3>
              
              <div className="bg-white p-2 rounded mb-2">
                <div className="font-bold text-sm">P5 Input:</div>
                <div className="font-mono text-xs">
                  Shape: (512, 26, 26)<br/>
                  Pixel (5,5): [3.2, -1.5, 2.8, ...]
                </div>
              </div>

              <div className="bg-blue-100 p-2 rounded mb-2">
                <div className="font-bold text-sm">Conv 1×1 (512→256):</div>
                <div className="font-mono text-xs">
                  W: (256, 512, 1, 1)<br/>
                  Output shape: (256, 26, 26)<br/>
                  Pixel (5,5): [1.8, -0.9, 1.4, ...]
                </div>
              </div>

              <div className="bg-green-100 p-2 rounded">
                <div className="font-bold text-sm">Upsample ×2 (Nearest):</div>
                <div className="text-xs">
                  (26,26) → (52,52)<br/>
                  Mỗi pixel thành 2×2 block
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-2 rounded-lg border-2 border-yellow-400">
              <div className="font-bold text-sm mb-1">Nearest Neighbor Upsample:</div>
              <div className="bg-white p-2 rounded font-mono text-xs">
                P5(5,5) = [1.8, -0.9, 1.4]<br/>
                <br/>
                Copy sang 4 pixels:<br/>
                P5_up(10,10) = [1.8, -0.9, 1.4]<br/>
                P5_up(10,11) = [1.8, -0.9, 1.4]<br/>
                P5_up(11,10) = [1.8, -0.9, 1.4]<br/>
                P5_up(11,11) = [1.8, -0.9, 1.4]
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2">Element-wise Addition</h3>
            
            <div className="bg-white p-2 rounded-lg border-2 border-gray-300 mb-2">
              <div className="font-bold text-sm mb-1">P4 từ Backbone:</div>
              <div className="font-mono text-xs">
                Shape: (256, 52, 52)<br/>
                Pixel (10,10): [2.5, 1.8, -0.7, ...]
              </div>
            </div>

            <div className="bg-white p-2 rounded-lg border-2 border-gray-300 mb-2">
              <div className="font-bold text-sm mb-1">P5_upsampled:</div>
              <div className="font-mono text-xs">
                Shape: (256, 52, 52)<br/>
                Pixel (10,10): [1.8, -0.9, 1.4, ...]
              </div>
            </div>

            <div className="bg-green-50 p-3 rounded-lg border-2 border-green-400">
              <div className="font-bold text-base mb-2">Element-wise Add:</div>
              <div className="bg-white p-2 rounded font-mono text-sm">
                P4_fused = P4 + P5_up<br/>
                <br/>
                Tại (10,10):<br/>
                Ch0: 2.5 + 1.8 = <span className="text-green-600">4.3</span><br/>
                Ch1: 1.8 + (-0.9) = <span className="text-green-600">0.9</span><br/>
                Ch2: -0.7 + 1.4 = <span className="text-green-600">0.7</span><br/>
                ...<br/>
                <br/>
                Final shape: (256, 52, 52)
              </div>
            </div>

            <div className="bg-blue-100 p-2 rounded mt-2">
              <div className="font-bold text-sm">Ý Nghĩa:</div>
              <div className="text-xs">
                P4_fused = P4 (chi tiết) + P5 (semantic)<br/>
                → Có cả hai loại thông tin!
              </div>
            </div>
          </div>
        </div>
      )
    },

    // NEW: PAN Strided Conv Calculation
    {
      type: 'custom',
      title: '🔢 PAN - Tính Toán Strided Convolution',
      component: () => (
        <div className="flex gap-3 h-full">
          <div className="flex-1">
            <div className="bg-blue-50 p-3 rounded-lg border-2 border-blue-400 mb-2">
              <h3 className="text-lg font-bold mb-2">Conv Stride=2</h3>
              <div className="text-sm space-y-1">
                <div className="bg-white p-2 rounded">
                  <strong>Stride = 2:</strong> Kernel "nhảy" 2 bước<br/>
                  → Output size = Input size / 2
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-2 rounded-lg">
              <div className="font-bold text-sm mb-1">Input: P3_fused</div>
              <div className="font-mono text-xs bg-white p-2 rounded mb-2">
                Shape: (128, 104, 104)<br/>
                <br/>
                Vùng 5×5 tại (0,0):
              </div>
              <div className="bg-white p-1 rounded font-mono" style={{fontSize: '9px'}}>
                [1.2, 2.5, 3.1, 1.8, 0.9]<br/>
                [0.8, 4.2, 2.9, 3.5, 1.2]<br/>
                [2.1, 1.9, 5.3, 2.7, 3.8]<br/>
                [1.5, 3.6, 1.1, 4.8, 2.2]<br/>
                [0.7, 2.8, 3.9, 1.6, 5.1]
              </div>
            </div>

            <div className="bg-yellow-100 p-2 rounded-lg mt-2">
              <div className="font-bold text-sm mb-1">Kernel 3×3 (stride=2):</div>
              <div className="bg-white p-1 rounded font-mono text-xs">
                W: (256, 128, 3, 3)<br/>
                Stride: 2
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2">Tính Toán Chi Tiết</h3>
            
            <div className="bg-white p-2 rounded-lg border-2 border-gray-300 mb-2">
              <div className="font-bold text-sm mb-1">Position (0,0) - Lấy 3×3:</div>
              <div className="font-mono text-xs space-y-1">
                <div>Input region:</div>
                <div className="bg-blue-50 p-1 rounded">
                  [1.2, 2.5, 3.1]<br/>
                  [0.8, 4.2, 2.9]<br/>
                  [2.1, 1.9, 5.3]
                </div>
                <div className="mt-1">Conv với kernel → <span className="text-green-600">Output[0,0]</span></div>
              </div>
            </div>

            <div className="bg-white p-2 rounded-lg border-2 border-gray-300 mb-2">
              <div className="font-bold text-sm mb-1">Position (0,1) - Nhảy 2 bước:</div>
              <div className="font-mono text-xs space-y-1">
                <div>Skip 1 column, lấy từ col 2:</div>
                <div className="bg-blue-50 p-1 rounded">
                  [3.1, 1.8, 0.9]<br/>
                  [2.9, 3.5, 1.2]<br/>
                  [5.3, 2.7, 3.8]
                </div>
                <div className="mt-1">Conv với kernel → <span className="text-green-600">Output[0,1]</span></div>
              </div>
            </div>

            <div className="bg-green-50 p-2 rounded-lg border-2 border-green-400">
              <div className="font-bold text-sm mb-1">Output P3_down:</div>
              <div className="font-mono text-xs bg-white p-2 rounded">
                Shape: (256, 52, 52)<br/>
                <br/>
                104/2 = 52 (spatial reduced)<br/>
                128→256 (channels increased)<br/>
                <br/>
                Pixel (0,0): [2.8, -0.5, 1.9, ...]<br/>
                Pixel (0,1): [3.1, 0.2, -1.2, ...]
              </div>
            </div>
          </div>
        </div>
      )
    },

    // NEW: Detection Head Calculation
    {
      type: 'custom',
      title: '🔢 Detection Head - Box Regression Calculation',
      component: () => (
        <div className="flex gap-3 h-full">
          <div className="flex-1">
            <div className="bg-blue-50 p-3 rounded-lg border-2 border-blue-400 mb-2">
              <h3 className="text-lg font-bold mb-2">Input Feature Map</h3>
              <div className="bg-white p-2 rounded text-sm font-mono">
                P3: (128, 104, 104)<br/>
                Tại cell (10,15): [3.2, -1.5, 2.8, ...]
              </div>
            </div>

            <div className="bg-green-50 p-2 rounded-lg border-2 border-green-400 mb-2">
              <h3 className="text-base font-bold mb-1">Detection Path (2 Conv):</h3>
              <div className="text-xs space-y-1">
                <div className="bg-white p-1 rounded font-mono">
                  Conv1 (3×3, 256 filters):<br/>
                  Output: [5.1, 3.8, -2.1, ...]<br/>
                  + BN + LeakyReLU
                </div>
                <div className="bg-white p-1 rounded font-mono">
                  Conv2 (3×3, 256 filters):<br/>
                  Output: [4.5, 2.9, 1.2, ...]<br/>
                  + BN + LeakyReLU
                </div>
              </div>
            </div>

            <div className="bg-purple-100 p-2 rounded-lg">
              <div className="font-bold text-sm mb-1">Final Conv 1×1:</div>
              <div className="text-xs font-mono">
                Filters: 3 × (4+1+num_classes)<br/>
                3 anchors × (x,y,w,h,obj,classes)<br/>
                <br/>
                Output per anchor:<br/>
                [t_x, t_y, t_w, t_h, obj]
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2">Box Coordinates Calculation</h3>
            
            <div className="bg-gray-50 p-2 rounded-lg mb-2">
              <div className="font-bold text-sm mb-1">Network Output (raw):</div>
              <div className="bg-white p-1 rounded font-mono text-xs">
                t_x = 0.6 (logit)<br/>
                t_y = 0.3 (logit)<br/>
                t_w = 0.2 (logit)<br/>
                t_h = -0.1 (logit)<br/>
                obj = 2.8 (logit)
              </div>
            </div>

            <div className="bg-blue-100 p-2 rounded-lg mb-2">
              <div className="font-bold text-sm mb-1">Bước 1: Apply Sigmoid/Exp:</div>
              <div className="font-mono text-xs space-y-0.5">
                <div>σ(t_x) = σ(0.6) = 0.646</div>
                <div>σ(t_y) = σ(0.3) = 0.574</div>
                <div>e^(t_w) = e^0.2 = 1.221</div>
                <div>e^(t_h) = e^-0.1 = 0.905</div>
                <div>σ(obj) = σ(2.8) = 0.943</div>
              </div>
            </div>

            <div className="bg-green-50 p-2 rounded-lg border-2 border-green-400">
              <div className="font-bold text-sm mb-1">Bước 2: Tính tọa độ thực:</div>
              <div className="bg-white p-2 rounded font-mono text-xs space-y-1">
                <div>Cell (c_x, c_y) = (10, 15)</div>
                <div>Stride = 8 pixels</div>
                <div>Anchor: (a_w, a_h) = (60, 80)</div>
                <div className="border-t border-gray-300 pt-1 mt-1"></div>
                <div>b_x = (0.646 + 10) × 8</div>
                <div>&nbsp;&nbsp;&nbsp; = 10.646 × 8 = <span className="text-green-600">85.2px</span></div>
                <div>b_y = (0.574 + 15) × 8</div>
                <div>&nbsp;&nbsp;&nbsp; = 15.574 × 8 = <span className="text-green-600">124.6px</span></div>
                <div>b_w = 60 × 1.221 = <span className="text-green-600">73.3px</span></div>
                <div>b_h = 80 × 0.905 = <span className="text-green-600">72.4px</span></div>
              </div>
            </div>

            <div className="bg-yellow-100 p-2 rounded mt-1">
              <div className="font-bold text-xs">Final Box:</div>
              <div className="text-xs">Center: (85.2, 124.6), Size: 73.3×72.4<br/>
              Confidence: 0.943 (94.3%)</div>
            </div>
          </div>
        </div>
      )
    },

    // NEW: Loss Function Calculation
    {
      type: 'custom',
      title: '📊 Loss Function - YOLO Loss Calculation',
      component: () => (
        <div className="flex gap-2 h-full">
          <div className="flex-1">
            <div className="bg-purple-50 p-2 rounded-lg border-2 border-purple-400 mb-2">
              <h3 className="text-base font-bold mb-1">YOLO Loss</h3>
              <div className="bg-white p-1 rounded text-xs font-mono">
                Loss = λ<sub>box</sub>L<sub>box</sub> + λ<sub>obj</sub>L<sub>obj</sub> + λ<sub>cls</sub>L<sub>cls</sub>
              </div>
            </div>

            <div className="bg-blue-100 p-2 rounded-lg mb-1">
              <h3 className="text-sm font-bold mb-1">1. Box Loss:</h3>
              <div className="text-xs">
                <div className="bg-white p-1 rounded font-mono">
                  L<sub>xy</sub> = (x̂-x)² + (ŷ-y)²<br/>
                  L<sub>wh</sub> = (√ŵ-√w)² + (√ĥ-√h)²
                </div>
              </div>
            </div>

            <div className="bg-green-100 p-2 rounded-lg mb-1">
              <h3 className="text-sm font-bold mb-1">2. Objectness:</h3>
              <div className="text-xs">
                <div className="bg-white p-1 rounded font-mono">
                  BCE = -[o log(ô) + (1-o)log(1-ô)]
                </div>
              </div>
            </div>

            <div className="bg-orange-100 p-2 rounded-lg">
              <h3 className="text-sm font-bold mb-1">3. Class Loss:</h3>
              <div className="text-xs">
                <div className="bg-white p-1 rounded font-mono">
                  CrossEntropy
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-base font-bold mb-1">Ví Dụ</h3>
            
            <div className="bg-gray-50 p-1 rounded-lg mb-1">
              <div className="font-bold text-xs mb-0.5">Ground Truth:</div>
              <div className="bg-white p-1 rounded font-mono text-xs">
                x=50, y=60, w=40, h=50, obj=1
              </div>
            </div>

            <div className="bg-gray-50 p-1 rounded-lg mb-1">
              <div className="font-bold text-xs mb-0.5">Prediction:</div>
              <div className="bg-white p-1 rounded font-mono text-xs">
                x̂=48, ŷ=62, ŵ=38, ĥ=48, ô=0.95
              </div>
            </div>

            <div className="bg-yellow-50 p-2 rounded-lg border-2 border-yellow-400">
              <div className="font-bold text-sm mb-1">Tính Loss:</div>
              <div className="font-mono text-xs space-y-0.5">
                <div className="bg-white p-1 rounded">
                  L<sub>xy</sub> = (48-50)² + (62-60)² = <span className="text-blue-600">8</span>
                </div>
                
                <div className="bg-white p-1 rounded">
                  L<sub>wh</sub> = 0.04 + 0.05 = <span className="text-blue-600">0.09</span>
                </div>

                <div className="bg-white p-1 rounded">
                  L<sub>obj</sub> = -log(0.95) = <span className="text-blue-600">0.051</span>
                </div>

                <div className="bg-white p-1 rounded">
                  L<sub>cls</sub> = -log(0.92) = <span className="text-blue-600">0.083</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-2 rounded-lg border-2 border-green-400 mt-1">
              <div className="font-bold text-sm mb-0.5">Total (λ=5,1,1):</div>
              <div className="font-mono text-xs">
                = 5×8.09 + 0.051 + 0.083<br/>
                = <span className="text-green-600 text-base font-bold">40.58</span>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 3: Detection example with calculations
    {
      type: 'custom',
      title: 'Ví Dụ: Phát Hiện Chữ "T"',
      component: () => (
        <div className="flex gap-6 h-full">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4 text-red-600">❌ Bottleneck 4→1</h3>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <div className="font-mono text-lg mb-2">Input: [ngang:5, dọc:3, góc:0, góc:0]</div>
              <div className="font-mono text-lg mb-2">Weights: [0.5, 0.5, 0, 0]</div>
              <div className="bg-yellow-200 p-3 rounded font-bold text-xl">
                Output = 5×0.5 + 3×0.5 = 4.0
              </div>
            </div>
            
            <div className="bg-red-50 border-2 border-red-300 p-4 rounded-lg">
              <div className="text-xl mb-2">❌ <strong>Vị trí B</strong> (chỉ có dọc):</div>
              <div className="font-mono text-lg">Input: [0, 3, 0, 0]</div>
              <div className="font-mono text-lg">Output = 1.5 ⚠️</div>
              <div className="text-red-700 font-bold mt-2">→ False Positive!</div>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4 text-green-600">✅ Progressive 4→2→1</h3>
            <div className="bg-gray-100 p-4 rounded-lg mb-2">
              <div className="text-lg font-bold mb-2">Bước 1: Tạo features trung gian</div>
              <div className="flex gap-4">
                <div className="flex-1 bg-blue-100 p-3 rounded">
                  <div className="font-bold">Ch1: Ngang</div>
                  <div className="font-mono">Vị trí A: 5</div>
                  <div className="font-mono">Vị trí B: 0</div>
                </div>
                <div className="flex-1 bg-green-100 p-3 rounded">
                  <div className="font-bold">Ch2: Dọc</div>
                  <div className="font-mono">Vị trí A: 3</div>
                  <div className="font-mono">Vị trí B: 3</div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg">
              <div className="text-lg font-bold mb-2">Bước 2: Kết hợp</div>
              <div className="font-mono text-lg">Weights: [0.4, 0.6]</div>
              <div className="mt-2">
                <div className="bg-green-200 p-2 rounded mb-2">
                  <strong>A:</strong> 5×0.4 + 3×0.6 = <strong>3.8 ✅</strong>
                </div>
                <div className="bg-gray-200 p-2 rounded">
                  <strong>B:</strong> 0×0.4 + 3×0.6 = <strong>1.8 ❌</strong>
                </div>
              </div>
              <div className="text-green-700 font-bold mt-3">→ Chính xác hơn!</div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 4: Conv → BN → ReLU Visual
    {
      type: 'custom',
      title: 'Conv → BatchNorm → ReLU',
      component: () => (
        <div className="flex flex-col h-full justify-center gap-6">
          <div className="flex items-center justify-center gap-4">
            <div className="bg-blue-500 text-white p-8 rounded-lg text-center flex-1">
              <div className="text-3xl font-bold mb-2">Conv</div>
              <div className="text-lg">Tạo features</div>
              <div className="text-sm mt-2">Output không ổn định</div>
            </div>
            <ArrowRight size={48} className="text-gray-400" />
            <div className="bg-green-500 text-white p-8 rounded-lg text-center flex-1">
              <div className="text-3xl font-bold mb-2">BatchNorm</div>
              <div className="text-lg">Chuẩn hóa</div>
              <div className="text-sm mt-2">mean=0, std=1</div>
            </div>
            <ArrowRight size={48} className="text-gray-400" />
            <div className="bg-purple-500 text-white p-8 rounded-lg text-center flex-1">
              <div className="text-3xl font-bold mb-2">ReLU</div>
              <div className="text-lg">Phi tuyến</div>
              <div className="text-sm mt-2">max(0, x)</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
              <div className="text-lg font-bold mb-3 text-blue-700">Output Conv</div>
              <div className="font-mono text-2xl space-y-1">
                <div>1.5</div>
                <div>3.5</div>
                <div>5.5</div>
              </div>
              <div className="text-sm mt-2 text-blue-600">⚠️ Phân tán rộng</div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
              <div className="text-lg font-bold mb-3 text-green-700">Output BN</div>
              <div className="font-mono text-2xl space-y-1">
                <div>-1.23</div>
                <div>0.00</div>
                <div>1.23</div>
              </div>
              <div className="text-sm mt-2 text-green-600">✅ Chuẩn hóa</div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <div className="text-lg font-bold mb-3 text-purple-700">Output ReLU</div>
              <div className="font-mono text-2xl space-y-1">
                <div>0.00</div>
                <div>0.00</div>
                <div>1.23</div>
              </div>
              <div className="text-sm mt-2 text-purple-600">✨ Cắt âm</div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 5: CSP Block Visual
    {
      type: 'custom',
      title: 'CSP Block - Cross Stage Partial',
      component: () => (
        <div className="flex gap-3 h-full items-center">
          <div className="flex-1 flex flex-col justify-center">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-2 rounded-lg mb-2 text-center">
              <div className="text-xl font-bold">Input: [A, B, C, D]</div>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <div className="flex-1 bg-yellow-100 p-3 rounded-lg border-2 border-yellow-400 text-center">
                <div className="text-base font-bold text-yellow-700 mb-1">Bypass 50%</div>
                <div className="text-sm">[A, B]</div>
                <div className="text-xs text-gray-600 mt-1">Giữ nguyên</div>
              </div>

              <div className="flex-1 bg-blue-100 p-3 rounded-lg border-2 border-blue-400 text-center">
                <div className="text-base font-bold text-blue-700 mb-1">Process 50%</div>
                <div className="text-sm">[C, D]</div>
                <div className="text-xs text-blue-600 mt-1">→ Residual Blocks</div>
                <div className="text-sm mt-1">[C''', D''']</div>
              </div>
            </div>

            <div className="bg-green-500 text-white p-3 rounded-lg text-center">
              <div className="text-lg font-bold mb-1">Concatenate Output</div>
              <div className="text-base">[A, B, C''', D''']</div>
            </div>
          </div>

          <div className="w-56">
            <div className="bg-green-50 p-3 rounded-lg border-2 border-green-300 mb-2">
              <div className="text-lg font-bold text-green-700 mb-2">✅ Lợi ích</div>
              <div className="text-sm space-y-1">
                <div>⚡ Giảm 50% tính toán</div>
                <div>🎯 Tăng diversity</div>
                <div>📈 Gradient tốt hơn</div>
              </div>
            </div>

            <div className="bg-orange-50 p-3 rounded-lg border-2 border-orange-300">
              <div className="text-base font-bold mb-2">Tính toán</div>
              <div className="text-sm space-y-1">
                <div>Traditional: <span className="font-bold text-red-600">4×3 = 12</span></div>
                <div>CSP: <span className="font-bold text-green-600">2×3 = 6</span></div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 6: Receptive Field Visual
    {
      type: 'custom',
      title: 'Receptive Field - Trường Tiếp Nhận',
      component: () => (
        <div className="flex gap-4 h-full items-center">
          <div className="flex-1 grid grid-cols-1 gap-2">
            <div className="bg-blue-50 p-3 rounded-lg border-2 border-blue-400">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xl font-bold text-blue-700">P3: 104×104</div>
                <div className="text-xs bg-blue-200 px-2 py-1 rounded">RF Nhỏ</div>
              </div>
              <div className="grid grid-cols-8 gap-0.5 mb-2">
                {[...Array(64)].map((_, i) => (
                  <div key={i} className="w-2.5 h-2.5 bg-blue-400 rounded-sm"></div>
                ))}
              </div>
              <div className="text-base text-blue-700">
                ✨ <strong>Chi tiết cao</strong> → Phát hiện vật NHỎ
              </div>
            </div>

            <div className="bg-green-50 p-3 rounded-lg border-2 border-green-400">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xl font-bold text-green-700">P4: 52×52</div>
                <div className="text-xs bg-green-200 px-2 py-1 rounded">RF Vừa</div>
              </div>
              <div className="grid grid-cols-6 gap-0.5 mb-2">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-green-400 rounded-sm"></div>
                ))}
              </div>
              <div className="text-base text-green-700">
                ⚖️ <strong>Cân bằng</strong> → Phát hiện vật VỪA
              </div>
            </div>

            <div className="bg-purple-50 p-3 rounded-lg border-2 border-purple-400">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xl font-bold text-purple-700">P5: 26×26</div>
                <div className="text-xs bg-purple-200 px-2 py-1 rounded">RF Lớn</div>
              </div>
              <div className="grid grid-cols-4 gap-0.5 mb-2">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-purple-400 rounded-sm"></div>
                ))}
              </div>
              <div className="text-base text-purple-700">
                🌍 <strong>Ngữ nghĩa cao</strong> → Phát hiện vật LỚN
              </div>
            </div>
          </div>

          <div className="flex-1 bg-gradient-to-br from-indigo-50 to-blue-50 p-4 rounded-lg">
            <h3 className="text-2xl font-bold mb-3 text-indigo-700">Tại sao cần cả 3?</h3>
            <div className="space-y-3 text-lg">
              <div className="bg-white p-3 rounded-lg shadow">
                <div className="font-bold text-blue-600 mb-1">👁️ P3: RF nhỏ</div>
                <div className="text-base">→ Thấy chi tiết, localization chính xác</div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow">
                <div className="font-bold text-green-600 mb-1">👀 P4: RF vừa</div>
                <div className="text-base">→ Cân bằng context & chi tiết</div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow">
                <div className="font-bold text-purple-600 mb-1">👁️‍🗨️ P5: RF lớn</div>
                <div className="text-base">→ Hiểu ngữ nghĩa, context toàn cục</div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 7: SPP Visual
    {
      type: 'custom',
      title: 'SPP - Spatial Pyramid Pooling',
      component: () => (
        <div className="flex gap-4 h-full">
          <div className="flex-1">
            <div className="bg-blue-500 text-white p-3 rounded-lg mb-3 text-center">
              <div className="text-xl font-bold">Input P5: 256ch, 26×26</div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-50 p-3 rounded-lg border-2 border-gray-300">
                <div className="font-bold text-base mb-1">Nhánh 1: Original</div>
                <div className="bg-gray-200 h-14 rounded flex items-center justify-center">
                  <div className="text-2xl">1×1</div>
                </div>
                <div className="text-xs mt-1 text-gray-600">Giữ nguyên pixel</div>
              </div>

              <div className="bg-yellow-50 p-3 rounded-lg border-2 border-yellow-400">
                <div className="font-bold text-base mb-1">Nhánh 2: Local</div>
                <div className="bg-yellow-200 h-14 rounded flex items-center justify-center">
                  <div className="text-2xl">5×5</div>
                </div>
                <div className="text-xs mt-1 text-yellow-700">MaxPool vùng nhỏ</div>
              </div>

              <div className="bg-orange-50 p-3 rounded-lg border-2 border-orange-400">
                <div className="font-bold text-base mb-1">Nhánh 3: Mid</div>
                <div className="bg-orange-200 h-14 rounded flex items-center justify-center">
                  <div className="text-2xl">9×9</div>
                </div>
                <div className="text-xs mt-1 text-orange-700">MaxPool vùng vừa</div>
              </div>

              <div className="bg-red-50 p-3 rounded-lg border-2 border-red-400">
                <div className="font-bold text-base mb-1">Nhánh 4: Global</div>
                <div className="bg-red-200 h-14 rounded flex items-center justify-center">
                  <div className="text-2xl">13×13</div>
                </div>
                <div className="text-xs mt-1 text-red-700">MaxPool toàn cục</div>
              </div>
            </div>

            <div className="bg-green-500 text-white p-3 rounded-lg mt-3 text-center">
              <div className="text-lg font-bold">Concatenate: 256×4 = 1024ch</div>
              <div className="text-base mt-1">Conv 1×1 → 512ch</div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-purple-700">Tính toán tại pixel (13,13)</h3>
              
              <div className="space-y-2 text-base">
                <div className="bg-white p-2 rounded shadow">
                  <strong>Original:</strong> [2.5, -1.3, 0.8]
                </div>
                <div className="bg-white p-2 rounded shadow">
                  <strong>MaxPool 5×5:</strong> 4.1
                </div>
                <div className="bg-white p-2 rounded shadow">
                  <strong>MaxPool 9×9:</strong> 5.8
                </div>
                <div className="bg-white p-2 rounded shadow">
                  <strong>MaxPool 13×13:</strong> 7.2
                </div>
              </div>

              <div className="mt-4 bg-purple-100 p-3 rounded-lg">
                <div className="text-lg font-bold text-purple-800 mb-1">✨ Kết quả</div>
                <div className="text-base">Mỗi pixel có thông tin từ <strong>mọi tỷ lệ</strong>!</div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 8: FPN Visual
    {
      type: 'custom',
      title: 'FPN - Feature Pyramid Network',
      component: () => (
        <div className="flex gap-8 h-full items-center">
          <div className="flex-1">
            <div className="relative">
              {/* P5 */}
              <div className="bg-purple-500 text-white p-6 rounded-lg mb-4">
                <div className="text-2xl font-bold">P5: 512ch, 26×26</div>
                <div className="text-lg mt-2">🧠 Semantic cao nhất</div>
              </div>
              
              <div className="flex items-center justify-center my-3">
                <div className="flex flex-col items-center">
                  <ArrowDown size={40} className="text-blue-500" strokeWidth={3} />
                  <div className="bg-blue-100 px-3 py-1 rounded text-sm font-bold">Conv 1×1 + Upsample ×2</div>
                </div>
              </div>

              {/* P4 */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1 bg-green-400 text-white p-4 rounded-lg">
                  <div className="text-xl font-bold">P4 gốc</div>
                  <div className="text-sm">52×52</div>
                </div>
                <Plus size={32} className="text-blue-600" strokeWidth={3} />
                <div className="flex-1 bg-purple-300 text-white p-4 rounded-lg">
                  <div className="text-xl font-bold">P5 ↓</div>
                  <div className="text-sm">semantic</div>
                </div>
                <div className="text-2xl">=</div>
                <div className="flex-1 bg-green-600 text-white p-4 rounded-lg">
                  <div className="text-xl font-bold">P4 fused</div>
                  <div className="text-sm">✅</div>
                </div>
              </div>

              <div className="flex items-center justify-center my-3">
                <div className="flex flex-col items-center">
                  <ArrowDown size={40} className="text-blue-500" strokeWidth={3} />
                  <div className="bg-blue-100 px-3 py-1 rounded text-sm font-bold">Upsample ×2</div>
                </div>
              </div>

              {/* P3 */}
              <div className="flex items-center gap-4">
                <div className="flex-1 bg-blue-400 text-white p-4 rounded-lg">
                  <div className="text-xl font-bold">P3 gốc</div>
                  <div className="text-sm">104×104</div>
                </div>
                <Plus size={32} className="text-blue-600" strokeWidth={3} />
                <div className="flex-1 bg-green-300 text-white p-4 rounded-lg">
                  <div className="text-xl font-bold">P4 ↓</div>
                  <div className="text-sm">semantic</div>
                </div>
                <div className="text-2xl">=</div>
                <div className="flex-1 bg-blue-600 text-white p-4 rounded-lg">
                  <div className="text-xl font-bold">P3 fused</div>
                  <div className="text-sm">✅</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg h-full flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6 text-indigo-700">Tính toán Element-wise</h3>
              
              <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <div className="text-xl font-bold mb-3">P4 tại (10,10):</div>
                <div className="space-y-3 text-lg font-mono">
                  <div>P4_gốc:  [1.8, 2.3, -0.5]</div>
                  <div className="text-purple-600">P5_up:   [3.2, -1.5, 2.8]</div>
                  <div className="border-t-2 border-gray-300 pt-2"></div>
                  <div className="text-green-600 font-bold">
                    P4_fused: [5.0, 0.8, 2.3]
                  </div>
                </div>
              </div>

              <div className="bg-green-100 p-4 rounded-lg">
                <div className="text-xl font-bold text-green-700 mb-2">✅ Kết quả</div>
                <div className="text-lg">
                  P3 & P4 được <strong>tăng cường semantic</strong> từ P5!
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 9: PAN Visual
    {
      type: 'custom',
      title: 'PAN - Path Aggregation Network',
      component: () => (
        <div className="flex gap-8 h-full items-center">
          <div className="flex-1">
            <div className="relative">
              {/* P3 */}
              <div className="bg-blue-600 text-white p-6 rounded-lg mb-4">
                <div className="text-2xl font-bold">P3 fused: 128ch, 104×104</div>
                <div className="text-lg mt-2">📍 Localization tốt nhất</div>
              </div>
              
              <div className="flex items-center justify-center my-3">
                <div className="flex flex-col items-center">
                  <ArrowDown size={40} className="text-orange-500" strokeWidth={3} />
                  <div className="bg-orange-100 px-3 py-1 rounded text-sm font-bold">Conv stride=2</div>
                </div>
              </div>

              {/* P4 */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1 bg-green-600 text-white p-4 rounded-lg">
                  <div className="text-xl font-bold">P4 fused</div>
                  <div className="text-sm">từ FPN</div>
                </div>
                <Plus size={32} className="text-orange-600" strokeWidth={3} />
                <div className="flex-1 bg-blue-400 text-white p-4 rounded-lg">
                  <div className="text-xl font-bold">P3 ↑</div>
                  <div className="text-sm">localization</div>
                </div>
                <div className="text-2xl">=</div>
                <div className="flex-1 bg-green-700 text-white p-4 rounded-lg">
                  <div className="text-xl font-bold">P4 refined</div>
                  <div className="text-sm">✅</div>
                </div>
              </div>

              <div className="flex items-center justify-center my-3">
                <div className="flex flex-col items-center">
                  <ArrowDown size={40} className="text-orange-500" strokeWidth={3} />
                  <div className="bg-orange-100 px-3 py-1 rounded text-sm font-bold">Conv stride=2</div>
                </div>
              </div>

              {/* P5 */}
              <div className="flex items-center gap-4">
                <div className="flex-1 bg-purple-600 text-white p-4 rounded-lg">
                  <div className="text-xl font-bold">P5 fused</div>
                  <div className="text-sm">từ FPN</div>
                </div>
                <Plus size={32} className="text-orange-600" strokeWidth={3} />
                <div className="flex-1 bg-green-400 text-white p-4 rounded-lg">
                  <div className="text-xl font-bold">P4 ↑</div>
                  <div className="text-sm">localization</div>
                </div>
                <div className="text-2xl">=</div>
                <div className="flex-1 bg-purple-700 text-white p-4 rounded-lg">
                  <div className="text-xl font-bold">P5 refined</div>
                  <div className="text-sm">✅</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-lg h-full flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6 text-orange-700">Tính toán Element-wise</h3>
              
              <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <div className="text-xl font-bold mb-3">P4 tại (26,26):</div>
                <div className="space-y-3 text-lg font-mono">
                  <div>P4_fused: [5.0, 0.8, 2.3]</div>
                  <div className="text-blue-600">P3_down:  [2.8, -0.5, 1.9]</div>
                  <div className="border-t-2 border-gray-300 pt-2"></div>
                  <div className="text-orange-600 font-bold">
                    P4_refined: [7.8, 0.3, 4.2]
                  </div>
                </div>
              </div>

              <div className="bg-orange-100 p-4 rounded-lg">
                <div className="text-xl font-bold text-orange-700 mb-2">✅ Kết quả</div>
                <div className="text-lg">
                  P4 & P5 được <strong>tăng cường localization</strong> từ P3!
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 10: FPN + PAN Highway
    {
      type: 'custom',
      title: 'Information Highway 2 Chiều',
      component: () => (
        <div className="flex gap-4 h-full items-center">
          <div className="flex-1 flex items-center justify-center">
            <div className="relative">
              {/* P5 */}
              <div className="bg-purple-600 text-white p-4 rounded-lg mb-3 text-center">
                <div className="text-2xl font-bold">P5</div>
                <div className="text-base mt-1">🧠 Semantic</div>
              </div>

              {/* Arrows FPN down */}
              <div className="flex justify-center my-2">
                <div className="flex flex-col items-center">
                  <div className="text-blue-600 font-bold text-sm mb-0.5">FPN ⬇️</div>
                  <ArrowDown size={32} className="text-blue-500" strokeWidth={4} />
                </div>
              </div>

              {/* P4 */}
              <div className="bg-green-600 text-white p-4 rounded-lg mb-3 text-center">
                <div className="text-2xl font-bold">P4</div>
                <div className="text-base mt-1">⚖️ Cân bằng</div>
              </div>

              {/* Arrows both ways */}
              <div className="flex justify-center my-2 gap-4">
                <div className="flex flex-col items-center">
                  <div className="text-blue-600 font-bold text-sm mb-0.5">FPN ⬇️</div>
                  <ArrowDown size={32} className="text-blue-500" strokeWidth={4} />
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-orange-600 font-bold text-sm mb-0.5">PAN ⬆️</div>
                  <ArrowDown size={32} className="text-orange-500 rotate-180" strokeWidth={4} />
                </div>
              </div>

              {/* P3 */}
              <div className="bg-blue-600 text-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold">P3</div>
                <div className="text-base mt-1">📍 Localization</div>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-3">
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
              <div className="text-xl font-bold text-blue-700 mb-2">⬇️ FPN: Top-Down</div>
              <div className="text-lg">
                Giáo sư dạy sinh viên<br/>
                P5 → P4 → P3<br/>
                <strong className="text-blue-600">Semantic information</strong>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-300">
              <div className="text-xl font-bold text-orange-700 mb-2">⬆️ PAN: Bottom-Up</div>
              <div className="text-lg">
                Sinh viên feedback thực tế<br/>
                P3 → P4 → P5<br/>
                <strong className="text-orange-600">Localization information</strong>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-400">
              <div className="text-xl font-bold text-green-700 mb-2">✅ Kết quả</div>
              <div className="text-lg space-y-1">
                <div>P3: Chi tiết + Semantic</div>
                <div>P4: Hoàn hảo cân bằng</div>
                <div>P5: Semantic + Localization</div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 11: Separate Paths
    {
      type: 'custom',
      title: 'Detection Head - Separate Paths',
      component: () => (
        <div className="flex gap-4 h-full">
          <div className="flex-1 bg-blue-50 p-4 rounded-lg border-2 border-blue-400">
            <div className="text-center mb-3">
              <div className="text-2xl font-bold text-blue-700">Detection Path</div>
              <div className="text-base text-blue-600 mt-1">🎯 Học Geometric Features</div>
            </div>

            <div className="space-y-2">
              <div className="bg-blue-200 p-2 rounded-lg text-center">
                <div className="font-bold text-sm">Input Features</div>
                <div className="text-xs mt-0.5">edges, corners, shapes</div>
              </div>
              
              <ArrowDown size={24} className="mx-auto text-blue-600" />
              
              <div className="bg-blue-300 p-2 rounded-lg text-center text-sm">
                <div className="font-bold">Conv 3×3 + BN + LeakyReLU</div>
              </div>
              
              <ArrowDown size={24} className="mx-auto text-blue-600" />
              
              <div className="bg-blue-300 p-2 rounded-lg text-center text-sm">
                <div className="font-bold">Conv 3×3 + BN + LeakyReLU</div>
              </div>
              
              <ArrowDown size={24} className="mx-auto text-blue-600" />
              
              <div className="bg-blue-500 text-white p-3 rounded-lg text-center">
                <div className="font-bold text-lg">Conv 1×1</div>
                <div className="text-base mt-1">📦 Box Coordinates</div>
                <div className="text-xs">[t_x, t_y, t_w, t_h, obj]</div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-green-50 p-4 rounded-lg border-2 border-green-400">
            <div className="text-center mb-3">
              <div className="text-2xl font-bold text-green-700">Classification Path</div>
              <div className="text-base text-green-600 mt-1">🎨 Học Semantic Features</div>
            </div>

            <div className="space-y-2">
              <div className="bg-green-200 p-2 rounded-lg text-center">
                <div className="font-bold text-sm">Input Features</div>
                <div className="text-xs mt-0.5">texture, color, patterns</div>
              </div>
              
              <ArrowDown size={24} className="mx-auto text-green-600" />
              
              <div className="bg-green-300 p-2 rounded-lg text-center text-sm">
                <div className="font-bold">Conv 3×3 + BN + LeakyReLU</div>
              </div>
              
              <ArrowDown size={24} className="mx-auto text-green-600" />
              
              <div className="bg-green-300 p-2 rounded-lg text-center text-sm">
                <div className="font-bold">Conv 3×3 + BN + LeakyReLU</div>
              </div>
              
              <ArrowDown size={24} className="mx-auto text-green-600" />
              
              <div className="bg-green-300 p-2 rounded-lg text-center text-sm">
                <div className="font-bold">Conv 3×3 + BN + LeakyReLU</div>
              </div>
              
              <ArrowDown size={24} className="mx-auto text-green-600" />
              
              <div className="bg-green-500 text-white p-3 rounded-lg text-center">
                <div className="font-bold text-lg">Conv 1×1</div>
                <div className="text-base mt-1">🏷️ Class Probabilities</div>
                <div className="text-xs">[P(class1), P(class2), ...]</div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 12: Anchor-Based Detection
    {
      type: 'custom',
      title: 'Anchor-Based Detection',
      component: () => (
        <div className="flex gap-4 h-full items-center">
          <div className="flex-1">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-lg mb-3">
              <div className="text-xl font-bold mb-1">Grid Cell (10, 15) tại P3</div>
              <div className="text-base">Stride = 8 pixels</div>
            </div>

            <div className="bg-yellow-50 p-3 rounded-lg border-2 border-yellow-400 mb-3">
              <div className="text-lg font-bold mb-2 text-yellow-700">Anchor Box</div>
              <div className="flex gap-4 items-center justify-center">
                <div className="border-4 border-yellow-600 w-24 h-32 rounded flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xl font-bold">60px</div>
                    <X size={20} className="mx-auto my-1" />
                    <div className="text-xl font-bold">80px</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-3 rounded-lg border-2 border-blue-400">
              <div className="text-lg font-bold mb-2 text-blue-700">Network Dự Đoán</div>
              <div className="space-y-1 text-base font-mono">
                <div className="bg-white p-1 rounded text-sm">t_x = 0.6</div>
                <div className="bg-white p-1 rounded text-sm">t_y = 0.3</div>
                <div className="bg-white p-1 rounded text-sm">t_w = 0.2</div>
                <div className="bg-white p-1 rounded text-sm">t_h = -0.1</div>
                <div className="bg-green-200 p-1 rounded font-bold text-sm">objectness = 0.95</div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-lg h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-3 text-green-700">Tính Tọa Độ Thực</h3>
              
              <div className="space-y-2">
                <div className="bg-white p-2 rounded-lg shadow">
                  <div className="text-base font-bold text-blue-600 mb-1">Tâm X:</div>
                  <div className="text-sm font-mono">
                    b_x = (0.6 + 10) × 8<br/>
                    = <strong className="text-green-600">84.8 px</strong>
                  </div>
                </div>

                <div className="bg-white p-2 rounded-lg shadow">
                  <div className="text-base font-bold text-blue-600 mb-1">Tâm Y:</div>
                  <div className="text-sm font-mono">
                    b_y = (0.3 + 15) × 8<br/>
                    = <strong className="text-green-600">122.4 px</strong>
                  </div>
                </div>

                <div className="bg-white p-2 rounded-lg shadow">
                  <div className="text-base font-bold text-purple-600 mb-1">Width:</div>
                  <div className="text-sm font-mono">
                    b_w = 60 × e^0.2<br/>
                    = <strong className="text-green-600">73.2 px</strong>
                  </div>
                </div>

                <div className="bg-white p-2 rounded-lg shadow">
                  <div className="text-base font-bold text-purple-600 mb-1">Height:</div>
                  <div className="text-sm font-mono">
                    b_h = 80 × e^-0.1<br/>
                    = <strong className="text-green-600">72.4 px</strong>
                  </div>
                </div>
              </div>

              <div className="bg-green-200 p-2 rounded-lg mt-3">
                <div className="text-base font-bold text-green-800">
                  ✅ Box: (84.8, 122.4), 73.2×72.4
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 13: Multi-Scale Predictions
    {
      type: 'custom',
      title: 'Multi-Scale Predictions',
      component: () => (
        <div className="flex flex-col h-full justify-center gap-2">
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-blue-50 p-2 rounded-lg border-2 border-blue-400">
              <div className="text-center mb-1">
                <div className="text-xl font-bold text-blue-700">P3</div>
                <div className="text-xs text-blue-600">104×104</div>
              </div>
              <div className="grid grid-cols-8 gap-0.5 mb-1 justify-center">
                {[...Array(32)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-blue-400"></div>
                ))}
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-700">32,448</div>
                <div className="text-sm mt-0.5">🔍 Vật NHỎ</div>
              </div>
            </div>

            <div className="bg-green-50 p-2 rounded-lg border-2 border-green-400">
              <div className="text-center mb-1">
                <div className="text-xl font-bold text-green-700">P4</div>
                <div className="text-xs text-green-600">52×52</div>
              </div>
              <div className="grid grid-cols-6 gap-0.5 mb-1 justify-center">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-green-400"></div>
                ))}
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-green-700">8,112</div>
                <div className="text-sm mt-0.5">📏 Vật VỪA</div>
              </div>
            </div>

            <div className="bg-purple-50 p-2 rounded-lg border-2 border-purple-400">
              <div className="text-center mb-1">
                <div className="text-xl font-bold text-purple-700">P5</div>
                <div className="text-xs text-purple-600">26×26</div>
              </div>
              <div className="grid grid-cols-5 gap-0.5 mb-1 justify-center">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-purple-400"></div>
                ))}
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-purple-700">2,028</div>
                <div className="text-sm mt-0.5">📊 Vật LỚN</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 rounded-lg text-center">
            <div className="text-2xl font-bold">42,588 Predictions</div>
            <div className="text-sm mt-1">→ NMS → Final Detections</div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-red-50 p-2 rounded-lg border-2 border-red-300 text-center">
              <div className="text-base font-bold text-red-700">❌ Không Multi-Scale</div>
              <div className="text-2xl font-bold text-red-600 mt-1">65%</div>
            </div>
            <div className="bg-green-50 p-2 rounded-lg border-2 border-green-300 text-center">
              <div className="text-base font-bold text-green-700">✅ Có Multi-Scale</div>
              <div className="text-2xl font-bold text-green-600 mt-1">92%</div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 14: Full Pipeline Visual
    {
      type: 'custom',
      title: 'Luồng Hoàn Chỉnh: Input → Output',
      component: () => (
        <div className="flex flex-col h-full justify-center items-center">
          <div className="w-full max-w-md space-y-1">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-1.5 rounded-lg text-center">
              <div className="text-sm font-bold">Input 832×832</div>
            </div>

            <ArrowDown size={16} className="mx-auto text-gray-400" />

            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-1.5 rounded-lg text-center">
              <div className="text-sm font-bold">Backbone</div>
            </div>

            <ArrowDown size={16} className="mx-auto text-gray-400" />

            <div className="flex gap-1 justify-center">
              <div className="bg-blue-400 text-white p-1 rounded flex-1 text-center text-xs font-bold">P3</div>
              <div className="bg-green-400 text-white p-1 rounded flex-1 text-center text-xs font-bold">P4</div>
              <div className="bg-purple-400 text-white p-1 rounded flex-1 text-center text-xs font-bold">P5</div>
            </div>

            <ArrowDown size={16} className="mx-auto text-gray-400" />

            <div className="bg-yellow-500 text-white p-1 rounded-lg text-center">
              <div className="text-xs font-bold">SPP</div>
            </div>

            <ArrowDown size={16} className="mx-auto text-gray-400" />

            <div className="bg-blue-500 text-white p-1 rounded-lg text-center">
              <div className="text-xs font-bold">FPN ⬇️</div>
            </div>

            <ArrowDown size={16} className="mx-auto text-gray-400" />

            <div className="bg-orange-500 text-white p-1 rounded-lg text-center">
              <div className="text-xs font-bold">PAN ⬆️</div>
            </div>

            <ArrowDown size={16} className="mx-auto text-gray-400" />

            <div className="flex gap-1">
              <div className="bg-blue-600 text-white p-1 rounded flex-1 text-center">
                <div className="text-xs font-bold">Detection</div>
              </div>
              <div className="bg-green-600 text-white p-1 rounded flex-1 text-center">
                <div className="text-xs font-bold">Classification</div>
              </div>
            </div>

            <ArrowDown size={16} className="mx-auto text-gray-400" />

            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-1.5 rounded-lg text-center">
              <div className="text-sm font-bold">42,588 Predictions</div>
              <div className="text-xs mt-0.5">→ NMS → Final</div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 15: Key Takeaways
    {
      type: 'custom',
      title: 'Key Takeaways',
      component: () => (
        <div className="grid grid-cols-2 gap-3 h-full p-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border-2 border-blue-400">
            <div className="text-2xl mb-2">🎯</div>
            <div className="text-lg font-bold mb-1">Giảm Channels Từ Từ</div>
            <div className="text-base">Học hierarchical features, tránh information bottleneck</div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border-2 border-green-400">
            <div className="text-2xl mb-2">⚡</div>
            <div className="text-lg font-bold mb-1">CSP Block</div>
            <div className="text-base">Giảm 50% tính toán, tăng diversity, gradient tốt hơn</div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border-2 border-purple-400">
            <div className="text-2xl mb-2">🏗️</div>
            <div className="text-lg font-bold mb-1">SPP + FPN + PAN</div>
            <div className="text-base">Multi-scale context + Bi-directional information flow</div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border-2 border-orange-400">
            <div className="text-2xl mb-2">🎨</div>
            <div className="text-lg font-bold mb-1">Separate Paths</div>
            <div className="text-base">Detection & Classification tối ưu độc lập</div>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-lg border-2 border-pink-400 col-span-2">
            <div className="text-2xl mb-2">📊</div>
            <div className="text-lg font-bold mb-1">Multi-Scale Predictions</div>
            <div className="text-base">P3 (nhỏ) + P4 (vừa) + P5 (lớn) = Phát hiện mọi kích thước (~92% accuracy)</div>
          </div>
        </div>
      )
    },

    // Slide 16: Thank You
    {
      type: 'title',
      title: 'Cảm ơn! 🎉',
      subtitle: 'Questions & Discussion'
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const slide = slides[currentSlide];

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col">
      {/* Slide Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-7xl h-full bg-white rounded-lg shadow-2xl p-8 flex flex-col overflow-hidden">
          {slide.type === 'title' && (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <h1 className="text-7xl font-bold text-slate-800 mb-6">{slide.title}</h1>
              <h2 className="text-4xl text-slate-600">{slide.subtitle}</h2>
            </div>
          )}

          {slide.type === 'custom' && (
            <div className="flex-1 flex flex-col overflow-hidden">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-b-4 border-blue-500 pb-3">
                {slide.title}
              </h2>
              <div className="flex-1 overflow-auto">
                {slide.component()}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="p-6 flex items-center justify-between bg-slate-800">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
        >
          <ChevronLeft size={24} />
          <span className="text-lg font-semibold">Previous</span>
        </button>

        <div className="text-white text-xl font-semibold">
          Slide {currentSlide + 1} / {slides.length}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
        >
          <span className="text-lg font-semibold">Next</span>
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Indicator */}
      <div className="px-6 pb-4 flex justify-center gap-2 bg-slate-800">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === currentSlide ? 'w-8 bg-blue-500' : 'w-2 bg-slate-600 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default YOLOPresentation;