import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { withTranslation } from 'react-i18next'

export function renderWithTranslation(
  Component: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  // оборачиваем компонент в withTranslation HOC
  const WrappedComponent = withTranslation()(() => Component)

  return render(<WrappedComponent />, options)
}
