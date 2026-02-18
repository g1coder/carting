export type SpacingValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;

/**
 * Spacing System Utilities
 *
 * Утилиты для работы с отступами на основе дизайн-токенов.
 * Система использует 17-уровневую шкалу отступов от 0 до 16.
 *
 * ## Токены отступов
 *
 * Каждое число соответствует определенному значению в пикселях:
 *
 * | Токен | Пиксели | REM (при 16px) | Пример использования      |
 * |-------|---------|----------------|---------------------------|
 * | 0     | 0px     | 0rem           | p-0, m-0                  |
 * | 1     | 1px     | 0.0625rem      | p-1 (очень маленький отступ) |
 * | 2     | 2px     | 0.125rem       | px-2, py-2                |
 * | 3     | 4px     | 0.25rem        | **Базовый отступ (--partners-base-spacing)** |
 * | 4     | 6px     | 0.375rem       | p-4                       |
 * | 5     | 8px     | 0.5rem         | m-5                       |
 * | 6     | 10px    | 0.625rem       | mt-6, mb-6                |
 * | 7     | 12px    | 0.75rem        | p-7                       |
 * | 8     | 16px    | 1rem           | **Стандартный отступ**    |
 * | 9     | 20px    | 1.25rem        | px-9, py-9                |
 * | 10    | 24px    | 1.5rem         | p-10                      |
 * | 11    | 32px    | 2rem           | m-11                      |
 * | 12    | 40px    | 2.5rem         | mt-12                     |
 * | 13    | 48px    | 3rem           | p-13                      |
 * | 14    | 64px    | 4rem           | **Крупный отступ**        |
 * | 15    | 80px    | 5rem           | px-15, py-15              |
 * | 16    | 96px    | 6rem           | **Очень крупный отступ**  |
 *
 * ## Доступные пропсы для компонентов
 *
 * ### Отступы внутрь (padding):
 * - `p` или `padding` - все стороны
 * - `px` - лево-право
 * - `py` - верх-низ
 * - `pt` - сверху
 * - `pb` - снизу
 * - `pl` - слева
 * - `pr` - справа
 *
 * ### Отступы наружу (margin):
 * - `m` или `margin` - все стороны
 * - `mx` - лево-право
 * - `my` - верх-низ
 * - `mt` - сверху
 * - `mb` - снизу
 * - `ml` - слева
 * - `mr` - справа
 *
 * ## Примеры использования
 *
 * ### Готовые CSS классы:
 *
 * ```html
 * <div class="p-8 mt-4 mb-4">
 *   Контент с отступами
 * </div>
 *
 * <button class="px-4 py-2 m-0">
 *   Кнопка
 * </button>
 *
 * <section class="my-8 px-6">
 *   Секция
 * </section>
 * ```
 *
 * ## Основные принципы
 *
 * 1. **Консистентность**: Всегда используйте токены вместо фиксированных значений
 * 2. **8-пиксельная сетка**: Большинство токенов кратно 8px (3, 8, 11, 14, 16)
 * 3. **Адаптивность**: Значения рассчитываются от CSS переменной `--partners-base-spacing`
 *
 */
export interface SpacingProps {
    p?: SpacingValue;
    padding?: SpacingValue;
    px?: SpacingValue;
    py?: SpacingValue;
    pt?: SpacingValue;
    pb?: SpacingValue;
    pl?: SpacingValue;
    pr?: SpacingValue;
    m?: SpacingValue;
    margin?: SpacingValue;
    mx?: SpacingValue;
    my?: SpacingValue;
    mt?: SpacingValue;
    mb?: SpacingValue;
    ml?: SpacingValue;
    mr?: SpacingValue;
}
