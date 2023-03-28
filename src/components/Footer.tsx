import { type FilterValue } from '../types'
import { Filters } from './Filters'

interface Props {
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
  OnClearCompleted: () => void
  handleFilterChange: (filter: FilterValue) => void
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  handleFilterChange,
  OnClearCompleted
}) => {
  return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> tareas pendientes
            </span>

            <Filters
                filterSelected={filterSelected}
                onFilterChange={handleFilterChange}
            />

            {
                completedCount > 0 && (
                    <button
                        className="clear-completed"
                        onClick={OnClearCompleted}
                    >
                        Borrar completadas
                    </button>
                )
            }
        </footer>
  )
}
