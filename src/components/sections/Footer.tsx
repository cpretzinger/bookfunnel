import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#26361C] text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} The Insurance Dudes. All rights reserved.</p>
      </div>
    </footer>
  );
}
