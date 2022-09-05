import { useEffect } from 'react'

export const Profile = () => {

	useEffect(() => {
		console.log('test')
	}, [])

	return (
		<div>
			<h3>Profile page</h3>

			<div className="profile">
				test
			</div>
		</div>
	)
}