import React from 'react'
import Button from './Button'
import './PledgeComments.css'

function PledgeBody () {
	return (
		<div className="PledgeComments">
			<div className='title'>
				<h4>Comments from donators</h4>
			</div>

			<div className='comment-wrapper'>
				<div className='comment'>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In adipiscing ut amet gravida ac etiam. Non fames et eget malesuada. Quis congue in malesuada interdum nunc suspendisse morbi.</p>
				</div>				
			</div>

			<div className='comment-wrapper'>
				<div className='comment'>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In adipiscing ut amet gravida ac etiam. Non fames et eget malesuada. Quis congue in malesuada interdum nunc suspendisse morbi.</p>
				</div>				
			</div>	

			<div className='comment-wrapper'>
				<div className='comment'>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In adipiscing ut amet gravida ac etiam. Non fames et eget malesuada. Quis congue in malesuada interdum nunc suspendisse morbi.</p>
				</div>				
			</div>

      <div className='donate-button'>
        <Button>
          Donate
        </Button>
      </div>			
		</div>
	)
}

export default PledgeBody;