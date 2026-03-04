from pdf2docx import Converter

pdf_file = 'project-report.pdf'
docx_file = 'project-report.docx'

print(f"Starting conversion of {pdf_file} to {docx_file}...")

try:
    # convert pdf to docx
    cv = Converter(pdf_file)
    cv.convert(docx_file)      # all pages by default
    cv.close()
    print("Conversion completed successfully!")
except Exception as e:
    print(f"Error during conversion: {e}")
