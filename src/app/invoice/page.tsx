'use client'

import { useEffect } from 'react'

export default function InvoicePage() {
  useEffect(() => {
    // Optional: Auto-print dialog (commented out - user can use Cmd/Ctrl+P)
    // window.print()
  }, [])
  
  // Add print-specific styles
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @media print {
        @page {
          margin: 0.5cm;
          size: A4;
        }
        body {
          background: white !important;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        .no-print {
          display: none !important;
        }
      }
    `
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  // Calculate today's date
  const today = new Date()
  const invoiceDate = today.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  // Invoice number (format: INV-YYYY-MM-DD-NNN)
  const invoiceNumber = `INV-${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}-001`

  const invoiceItems = [
    {
      description: 'Website Development Services',
      quantity: 1,
      rate: 14000,
      amount: 14000
    },
    {
      description: 'Yearly Maintenance & Support',
      quantity: 1,
      rate: 5000,
      amount: 5000
    },
    {
      description: 'Domain Registration & Hosting (Annual)',
      quantity: 1,
      rate: 4833,
      amount: 4833
    }
  ]

  const subtotal = invoiceItems.reduce((sum, item) => sum + item.amount, 0)
  const tax = 0 // Assuming no tax, adjust if needed
  const total = subtotal + tax

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden print:shadow-none print:rounded-none">
        {/* Print styles */}
        <style jsx>{`
          @media print {
            body {
              margin: 0;
              padding: 0;
            }
            .no-print {
              display: none;
            }
            .print-page {
              page-break-after: auto;
            }
          }
        `}</style>

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-8 print:bg-blue-600">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">INVOICE</h1>
              <p className="text-blue-100">Invoice #{invoiceNumber}</p>
            </div>
            <div className="text-right">
              <p className="text-blue-100 mb-1">Date:</p>
              <p className="font-semibold">{invoiceDate}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 print:p-6">
          {/* From and To Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* From */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">From:</h3>
              <div className="text-gray-800">
                <p className="font-bold text-lg mb-1">Vimal Shetty</p>
                <p className="text-gray-600">Web Developer</p>
                <p className="text-gray-600 mt-2">Email: [Your Email]</p>
                <p className="text-gray-600">Phone: [Your Phone]</p>
              </div>
            </div>

            {/* To */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Bill To:</h3>
              <div className="text-gray-800">
                <p className="font-bold text-lg mb-1">Dr. Kedar Hibare</p>
                <p className="text-gray-600">Lead Consultant - Interventional Pulmonologist</p>
                <p className="text-gray-600 mt-2">SPARSH Hospital</p>
                <p className="text-gray-600">HBR Layout, Hennur Road</p>
                <p className="text-gray-600">Bengaluru - 560043</p>
                <p className="text-gray-600">Karnataka, India</p>
              </div>
            </div>
          </div>

          {/* Invoice Items Table */}
          <div className="mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-gray-300">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Description</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700 w-24">Qty</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700 w-32">Rate (₹)</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700 w-32">Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                {invoiceItems.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-4 px-4 text-gray-800">{item.description}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{item.quantity}</td>
                    <td className="py-4 px-4 text-right text-gray-600">
                      {item.rate.toLocaleString('en-IN')}
                    </td>
                    <td className="py-4 px-4 text-right font-semibold text-gray-800">
                      {item.amount.toLocaleString('en-IN')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Totals */}
          <div className="flex justify-end mb-8">
            <div className="w-full md:w-80">
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal:</span>
                  <span className="font-semibold">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {tax > 0 && (
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (GST):</span>
                    <span className="font-semibold">₹{tax.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-xl font-bold text-gray-900 pt-3 border-t-2 border-gray-300">
                  <span>Total:</span>
                  <span>₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-semibold text-gray-800 mb-2">Payment Terms:</h3>
            <p className="text-gray-600 text-sm">
              Payment due within 30 days of invoice date. Please make payment via bank transfer or as mutually agreed.
            </p>
          </div>

          {/* Notes */}
          <div className="mt-6 border-t border-gray-200 pt-6">
            <h3 className="font-semibold text-gray-800 mb-2">Notes:</h3>
            <p className="text-gray-600 text-sm">
              Thank you for your business. This invoice includes website development, yearly maintenance services, and domain registration for the year.
            </p>
          </div>

          {/* Signature Section */}
          <div className="mt-12 pt-6 border-t border-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 text-sm mb-1">Authorized Signature</p>
                <div className="mt-8">
                  <p className="font-semibold text-gray-800">Vimal Shetty</p>
                  <p className="text-gray-600 text-sm">Web Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Print Button */}
        <div className="bg-gray-50 p-4 border-t border-gray-200 no-print">
          <div className="max-w-4xl mx-auto flex justify-end">
            <button
              onClick={() => window.print()}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-colors"
            >
              Print / Save as PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

