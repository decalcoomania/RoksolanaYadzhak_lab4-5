// src/components/WelcomeBlock.jsx
"use client"

import React from "react"

const WelcomeBlock = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-6 w-full max-w-4xl">
        <div className="flex flex-col md:flex-row w-full items-center justify-between">
          {/* Блок із текстом */}
          <div className="flex flex-col items-start md:w-1/2 p-4">
            <h1 className="text-4xl font-bold text-black mb-4">Привіт, Макіс!</h1>
            <p className="text-xl text-muted-foreground">
              Ласкаво просимо до нашого вебсайту! Тут ви знайдете все необхідне для моніторингу здоров'я та багато іншого.
            </p>
          </div>

          {/* Блок з фото */}
          <div className="md:w-1/2 flex justify-center p-4">
            <img
              src="https://placekitten.com/400/400" // Замінити на своє фото
              alt="Макіс"
              className="w-full max-w-xs rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeBlock
