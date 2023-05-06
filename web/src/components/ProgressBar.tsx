interface ProgressBarProps {
    progress: number
}

export function ProgressBar(props: ProgressBarProps) {
    return (
        <div className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>
            <div
                className='h-3 rounded-xl bg-violet-600 w-3/4 transition-all'
                role="progressbar"
                aria-label="Habit's progress completed in that day"
                aria-valuenow={props.progress}
                style={{ width: `${props.progress}%` }}
            />
        </div>
    )
}